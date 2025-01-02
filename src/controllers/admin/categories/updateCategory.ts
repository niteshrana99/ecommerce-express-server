import { getAuth } from '@clerk/express';
import { Request, Response } from 'express';
import prisma from '../../../../db';

export const updateCategory = async (req: Request, res: Response) => {
  const { userId } = getAuth(req);
  const { name, categoryId, billboardId } = req.body;

  if (!userId) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const response = await prisma.category.update({
    where: {
      id: categoryId,
    },
    data: {
      name,
      billboardId,
    },
  });

  res.status(200).json(response);
};
