import { getAuth } from "@clerk/express";
import { Request, Response } from "express";
import prisma from "../../../../db";

export const getCategoryById = async (req: Request, res: Response) => {
    const { userId } = getAuth(req);
    const { categoryId } = req.params;
    
    if(!userId) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    };

    if(!categoryId) {
        res.status(200).json({ data: null });
    };

    const response = await prisma.category.findUnique({
        where: {
          id: categoryId,
        }
      });

    res.status(200).json(response);
}