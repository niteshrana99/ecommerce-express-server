import { getAuth } from '@clerk/express';
import { Request, Response } from 'express';
import prisma from '../../../../db';

export const createCategory = async (req: Request, res: Response) => {
  const { userId } = getAuth(req);
  const { name, billboardId, storeId } = req.body;

  if (!userId) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const category = await prisma.category.create({
    data: {
      name,
      billboardId,
      storeId,
    }
  })

  res
    .status(200)
    .json({ data: category, message: 'Category created successfully' });
};
