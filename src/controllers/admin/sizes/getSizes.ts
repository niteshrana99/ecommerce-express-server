import { getAuth } from '@clerk/express';
import { Request, Response } from 'express';
import prisma from '../../../../db';

export const getSizes = async (req: Request, res: Response) => {
  const { userId } = getAuth(req);
  const { storeId } = req.params;

  if (!userId) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const response = await prisma.size.findMany({
    where: {
        storeId
    }
  });

  res.status(200).json(response)
};
