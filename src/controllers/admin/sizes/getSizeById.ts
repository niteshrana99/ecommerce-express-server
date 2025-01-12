import { getAuth } from '@clerk/express';
import { Request, Response } from 'express';
import prisma from '../../../../db';

export const getSizesById = async (req: Request, res: Response) => {
  const { userId } = getAuth(req);
  const { storeId, sizeId } = req.params;

  if (!userId) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const response = await prisma.size.findFirst({
    where: {
        storeId,
        id: sizeId,
    }
  });

  res.status(200).json(response)
};
