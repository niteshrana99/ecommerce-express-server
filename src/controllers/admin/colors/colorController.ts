import prisma from "../../../../db";
import { BaseController } from "../baseController";

class ColorController extends BaseController {
    constructor() {
        super(prisma.color, 'colorId');}
}

const colorController = new ColorController();

export const deleteColor = colorController.deleteEntity;
export const createColor = colorController.createEntity;
export const getColorById = colorController.getEntityById;
export const getColors = colorController.getEntity;
export const updateColor = colorController.updateEntity;