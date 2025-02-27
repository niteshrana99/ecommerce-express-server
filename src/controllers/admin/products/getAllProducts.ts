import { getAuth } from "@clerk/express";
import { Response, Request } from "express";
import prisma from "../../../../db";

export const getAllProducts = async (req: Request, res: Response) => {
    const { storeId } = req.params;
    const { isFeatured, categoryId, colorId, sizeId, isArchived } = req.query;
    const isFeaturedFilter = isFeatured === 'true';
    const categoryIdFilter = typeof categoryId === 'string' ? categoryId : undefined;
    const colorIdFilter = typeof colorId === 'string' ? colorId : undefined;
    const sizeIdFilter = typeof sizeId === 'string' ? sizeId : undefined;
    const isArchivedFilter = typeof isArchived === 'string' ? isArchived === 'true' : undefined;

    const response = await prisma.product.findMany({
        where: {
            storeId,
            ...(isFeatured !== undefined && { isFeatured: isFeaturedFilter }),
            ...(categoryIdFilter !== undefined && { categoryId: categoryIdFilter }),
            ...(colorIdFilter !== undefined && { colorId: colorIdFilter }),
            ...(sizeIdFilter !== undefined && { sizeId: sizeIdFilter }),
            ...(isArchivedFilter !== undefined && { isArchived: Boolean(isArchivedFilter) }),
        },
        orderBy: {
            createdAt: 'desc'
        },
        select: {
            id: true,
            name: true,
            price: true,
            isFeatured: true,
            isArchived: true,
            size: {
                select: {
                    id: true,
                    name: true,
                }
            },
            color:  {
                select: {
                    id: true,
                    name: true,
                    value: true
                }
            },
            images:  {
                select: {
                    url: true,
                    id: true,
                }
            },
            category: {
                select: {
                    id: true,
                    name: true,
                }
            }
            
        }
    });

    res.status(200).json(response)

}