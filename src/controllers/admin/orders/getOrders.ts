import { Request, Response } from "express";
import prisma from "../../../../db";
import { getAuth } from "@clerk/express";

export const getOrders = async (req: Request, res: Response) => {
    const { userId } = getAuth(req);
    const { storeId } = req.params;

    if(!userId) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }
    const orders = await prisma.order.findMany({
        where: {
            storeId,
            store: {
                userId,
            },
        },
        include: {
            orderItems: {
                include: {
                    product: true,
                }
            }
        }
    });

    res.status(200).json(orders);

}