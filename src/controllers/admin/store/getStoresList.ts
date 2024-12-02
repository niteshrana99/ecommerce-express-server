import { getAuth } from "@clerk/express";
import { Request, Response } from "express";
import prisma from "../../../../db";

export const getStoresList = async (req: Request, res: Response) => {
    const { userId } = getAuth(req);

    if(!userId) {
        res.status(401).json({ message: "Unauthorized" });
        return;
    }

    const response = await prisma.store.findMany({
        where: {
            userId,
        },
        select: {
            id: true,
            name: true,
        }
    });
    
    res.status(200).json(response);
} 