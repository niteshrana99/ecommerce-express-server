import { getAuth } from "@clerk/express";
import { Request, Response } from "express";
import prisma from "../../../../db";

export const deleteCategory = async(req:Request, res: Response) => {
    const { userId } = getAuth(req);
    const { categoryId } = req.params;

    if (!userId) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }

    const response = await prisma.category.delete({
        where: {
            id: categoryId,
        },
    });

    res.status(200).json(response);
}