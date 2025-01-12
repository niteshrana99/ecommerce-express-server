import { getAuth } from '@clerk/express';
import { Request, Response } from 'express';
import prisma from '../../../../db';

export const updateSize = async (req: Request, res: Response) => {
  const { userId } = getAuth(req);
  const { name, sizeId, value } = req.body;
  const { storeId } = req.params;

  if (!userId) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const response = await prisma.size.update({
    where: {
      id: sizeId,
      storeId,
    },
    data: {
      name,
      value,
    },
  });

  res.status(200).json(response);
};
