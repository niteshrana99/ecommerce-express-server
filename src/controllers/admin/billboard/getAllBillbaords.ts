import { Request, Response } from "express";
import prisma from "../../../../db";

export const getAllBillbaords = async (req: Request, res: Response) => {
    const { storeId } = req.params;

    const response = await prisma.billboard.findMany({
        where: {
            storeId,
        }
    });

    res.status(200).json(response)
};