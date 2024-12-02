import { getAuth } from '@clerk/express';
import { Request, Response } from 'express';
import prisma from '../../../../db';

/**
 * Updates a store, given the storeId and the userId of the user making the request.
 *
 * @param {Request} req - The express request object.
 * @param {Response} res - The express response object.
 * @returns {Promise<void>}
 */
export const updateStore = async (req: Request, res: Response) => {
  const { userId } = getAuth(req);
  const { storeId } = req.params;
  const { name } = req.body;

  if (!userId) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const response = await prisma.store.update({
    where: {
      id: storeId,
      userId,
    },
    data: {
      name,
    },
  });

  res.status(200).json(response);
};

/**
 * Deletes a store, given the storeId and the userId of the user making the request.
 *
 * @param {Request} req - The express request object.
 * @param {Response} res - The express response object.
 * @returns {Promise<void>}
 */
export const deleteStore = async (req: Request, res: Response) => {
  const { userId } = getAuth(req);
  const { storeId } = req.params;

  if (!userId) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const response = await prisma.store.delete({
    where: {
      id: storeId,
      userId,
    },
  });

  res.status(200).json(response);
};
