import { getAuth } from '@clerk/express';
import { Request, Response } from 'express';
import prisma from '../../../../db';

export const updateBillboard = async (req: Request, res: Response) => {
  const { userId } = getAuth(req);
  const { label, imageUrl, billboardId, storeId } = req.body;

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
    return;
  }

  const response = await prisma.billboard.update({
    where: {
      id: billboardId,
    },
    data: {
      label,
      backgroundImage: imageUrl,
    },
  });

  res.status(200).json(response);
};
