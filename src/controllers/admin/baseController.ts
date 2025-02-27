import { getAuth } from '@clerk/express';
import { Request, Response } from 'express';
import prisma from '../../../db';

export abstract class BaseController {
  protected model: any;
  protected idParam: string;

  constructor(model: any, idParam: string) {
    this.model = model;
    this.idParam = idParam;
  }

  deleteEntity = async (req: Request, res: Response) => {
    const { userId } = getAuth(req);

    const paramId = req.params[this.idParam];
    const { storeId } = req.params;

    if (!userId) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    console.log(this.model);

    const response = await this.model.delete({
      where: {
        id: paramId,
        storeId,
      },
    });

    res.status(200).json({
      data: response,
    });
  };

  createEntity = async (req: Request, res: Response) => {
    const { userId } = getAuth(req);

    const { storeId } = req.params;

    const { name, value } = req.body;

    if (!userId) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    const response = await this.model.create({
      data: {
        storeId,
        name,
        value,
      },
    });

    res.status(200).json({
      data: response,
    });
  };

  getEntityById = async (req: Request, res: Response) => {
    const { storeId } = req.params;
    const paramId = req.params[this.idParam];

    const response = await this.model.findFirst({
      where: {
        storeId,
        id: paramId,
      },
    });

    res.status(200).json(response);
  };

  getEntity = async (req: Request, res: Response) => {
    const { storeId } = req.params;

    const response = await this.model.findMany({
      where: {
        storeId,
      },
    });

    res.status(200).json(response);
  };

  updateEntity = async (req: Request, res: Response) => {
    const { userId } = getAuth(req);
    const paramId = req.body[this.idParam]
    const { name, value } = req.body;
    const { storeId } = req.params;

    if (!userId) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    const response = await this.model.update({
      where: {
        id: paramId,
        storeId,
      },
      data: {
        name,
        value,
      },
    });

    res.status(200).json(response);
  };
}
