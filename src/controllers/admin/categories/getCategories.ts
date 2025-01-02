import { Request, Response } from "express";
import prisma from "../../../../db";
import { getAuth } from "@clerk/express";

export const getCategories = async (req: Request, res: Response) => {
    const { userId } = getAuth(req);
    const { storeId } = req.params;

    if(!userId) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }
    const response = await prisma.category.findMany({
        where: {
            storeId,
            store: {
                userId,
            },
        },
        select: {
            id: true,
            name: true,
            storeId: true,
            createdAt: true,
            billboard: {
                select: {
                    id: true,
                    label: true,
                }
            }
        }
    });

    res.status(200).json(response);
}