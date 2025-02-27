import { getAuth } from "@clerk/express";
import { Request, Response } from "express";
import prisma from "../../../../db";

export const getCategoryById = async (req: Request, res: Response) => {
    const { categoryId } = req.params;

    if(!categoryId) {
        res.status(200).json({ data: null });
    };

    const response = await prisma.category.findUnique({
        where: {
          id: categoryId,
        },
        include: {
          billboard: true,
        },
      });

    res.status(200).json(response);
}