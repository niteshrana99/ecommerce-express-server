import { getAuth } from "@clerk/express";
import { Request, Response } from "express";
import prisma from "../../../../db";

export const deleteProduct= async(req:Request, res: Response) => {
    const { userId } = getAuth(req);
    const { productId } = req.params;

    if (!userId) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }

    const response = await prisma.product.delete({
        where: {
            id: productId,
        },
    });

    res.status(200).json(response);
}