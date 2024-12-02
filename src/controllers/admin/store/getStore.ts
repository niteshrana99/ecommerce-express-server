import { getAuth } from "@clerk/express";
import { Request, Response } from "express";
import prisma from "../../../../db";

export const getStore = async (req: Request, res: Response) => {
    const { userId } = getAuth(req);
    const { storeId } = req.params;

    if(!userId) {
        res.status(401).json({ message: "Unauthorized" });
        return;
    }

    const response = await prisma.store.findFirst({
        where: {
            userId, 
            id: storeId,
        }
    });
    
    res.status(200).json(response);
} 