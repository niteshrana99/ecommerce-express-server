import { getAuth } from "@clerk/express";
import { Request, Response } from "express";
import prisma from "../../../../db";

export const getBillBoardById = async (req: Request, res: Response) => {
    const { userId } = getAuth(req);

    const { billboardId } = req.params;
    

    if(!userId) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    };

    if(!billboardId) {
        res.status(200).json({ data: null });
    };

    const response = await prisma.billboard.findUnique({
        where: {
          id: billboardId,
        }
      });

    res.status(200).json(response);

    

}