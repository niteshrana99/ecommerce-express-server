import { getAuth } from "@clerk/express";
import { Request, Response } from "express";
import prisma from "../../../../db";

export const getProductById = async (req: Request, res: Response) => {
    const { storeId, productId } = req.params;

    if(!storeId || !productId) {
        res.status(200).json({ data: null });
    };

    const response = await prisma.product.findUnique({
        where: {
          id: productId,
          storeId,
        },
        include: {
          images: true,
          size: true,
          color: true,
        },
      });

    res.status(200).json(response);
}