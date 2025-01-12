import { getAuth } from "@clerk/express";
import { Request, Response } from "express";
import prisma from "../../../../db";

export const deleteSize = async(req:Request, res: Response) => {
    const { userId } = getAuth(req);
    const { sizeId, storeId } = req.params;

    if (!userId) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }

    const response = await prisma.size.delete({
        where: {
            id: sizeId,
            storeId
        },
    });

    res.status(200).json(response);
}