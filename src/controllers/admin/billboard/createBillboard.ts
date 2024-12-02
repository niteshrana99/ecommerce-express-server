import { getAuth } from '@clerk/express';
import { Request, Response } from 'express';
import prisma from '../../../../db';

export const createBillboard = async (req: Request, res: Response) => {
  const { userId } = getAuth(req);
  const { label, imageUrl, storeId } = req.body;

  if (!userId) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const store = await prisma.store.findFirst({
    where: {
      id: storeId,
      userId,
    },
  });

  if (!store) {
    res.status(404).json({ message: 'Store not found with user.' });
  }

  const response = await prisma.billboard.create({
    data: {
      label,
      backgroundImage: imageUrl,
      storeId,
    },
  });

  res
    .status(200)
    .json({ data: response, message: 'Billboard created successfully' });
};
