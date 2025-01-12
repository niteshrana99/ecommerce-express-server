import { getAuth } from '@clerk/express';
import { Request, Response } from 'express';
import prisma from '../../../../db';

export const createSize = async (req: Request, res: Response) => {
  const { userId } = getAuth(req);
  const { storeId } = req.params;
  const { name, value } = req.body;

  if (!userId) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const response = await prisma.size.create({
    data: {
        storeId,
        name,
        value,
    }
  })

  res.status(200).json({
    data: response
  })
};
