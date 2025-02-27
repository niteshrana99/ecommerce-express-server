import { Request, Response } from "express";
import prisma from "../../../../db";

export const getBillBoardById = async (req: Request, res: Response) => {
    const { billboardId, storeId } = req.params;

    if(!billboardId) {
        res.status(200).json({ data: null });
    };

    const response = await prisma.billboard.findUnique({
        where: {
          id: billboardId,
          store: {
            id: storeId
          }
        }
      });

    res.status(200).json(response);
}