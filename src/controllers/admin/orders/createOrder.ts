import { Request, Response } from "express";
import prisma from "../../../../db";

export const createOrder = async (req: Request, res: Response) => {
    const { storeId } = req.params;

    const { productIds, address, phone,  } = req.body;

    if(!productIds || productIds.length == 0) {
        res.status(400).json({ message: "Please provide productIds" });
    };

    const products = await prisma.product.findMany({
        where: {
            id: {
                in: productIds
            }
        }
    });

    const order = await prisma.order.create({
        data: {
            storeId,
            isPaid: true,
            phone,
            address,
            orderItems: {
                create: products.map((product) => ({
                    productId: product.id,
                })),
            },
        }
    });

    res.status(200).json(order);
}