import { getAuth } from '@clerk/express';
import { Request, Response } from 'express';
import prisma from '../../../../db';

export const createProduct = async (req: Request, res: Response) => {
  const { userId } = getAuth(req);

  if (!userId) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const {
    name,
    price,
    sizeId,
    colorId,
    images,
    isFeatured,
    isArchived,
    categoryId,
    storeId
  } = req.body;

  if (!name || !price || !sizeId || !colorId || !images || !categoryId) {
    res.status(404).json({ message: 'Please provide all required fields' });
    return;
  }

  const response = await prisma.product.create({
    data: {
      name,
      price,
      sizeId,
      colorId,
      images: {
        create: images.map((url: string) => ({url})),
      },
      isFeatured,
      isArchived,
      categoryId,
      storeId: storeId,
    },
  });
  
  res.status(200).json(response);
};
