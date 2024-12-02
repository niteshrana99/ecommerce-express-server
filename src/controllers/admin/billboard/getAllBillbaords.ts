import { getAuth } from "@clerk/express";
import { Request, Response } from "express";
import prisma from "../../../../db";

export const getAllBillbaords = async (req: Request, res: Response) => {
    const { userId } = getAuth(req);
    const { storeId } = req.params;

    if(!userId) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }

    const response = await prisma.billboard.findMany({
        where: {
            storeId,
            store: {
                userId
            }
        }
    });

    res.status(200).json(response)
};