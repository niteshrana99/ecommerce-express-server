import prisma from "../../../../db";
import { BaseController } from "../baseController";

class SizesController extends BaseController {
    constructor() {
        super(prisma.size, 'sizeId');}
}

const csizeController = new SizesController();

export const deleteSize = csizeController.deleteEntity;
export const createSize = csizeController.createEntity;
export const getSizesById = csizeController.getEntityById;
export const getSizes = csizeController.getEntity;
export const updateSize = csizeController.updateEntity;