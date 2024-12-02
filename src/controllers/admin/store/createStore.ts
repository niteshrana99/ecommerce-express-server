import { Request , Response } from "express";
import prisma from "../../../../db";
import { getAuth } from "@clerk/express";

export const createStore = async(req: Request, res: Response) => {
    const { userId } = getAuth(req);
    const { name } = req.body;
    if(!name) {
        res.status(404).json({ message: "Please provide name for the store" });
        return;
    }

    if(!userId) {
        res.status(401).json({ message: "Unauthorized" });
        return;
    }

    const response = await prisma.store.create({
        data: {
            userId,
            name,
        }
    })
    res.json(response)
}