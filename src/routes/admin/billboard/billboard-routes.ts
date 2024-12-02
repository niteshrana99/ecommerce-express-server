import { Router } from "express";
import { createBillboard } from "../../../controllers/admin/billboard/createBillboard";
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';
import { getAllBillbaords } from "../../../controllers/admin/billboard/getAllBillbaords";
import { getBillBoardById } from "../../../controllers/admin/billboard/getBillboardById";
import { updateBillboard } from "../../../controllers/admin/billboard/updateBillboard";
import { deleteBillboard } from "../../../controllers/admin/billboard/deleteBillboard";

const router = Router();

router.get('/getBillboardList/:storeId', ClerkExpressRequireAuth(), getAllBillbaords);
router.get('/getBillboardById/:billboardId', ClerkExpressRequireAuth(), getBillBoardById);

router.post('/createBillboard', ClerkExpressRequireAuth(), createBillboard);

router.patch('/updateBillboard', ClerkExpressRequireAuth(), updateBillboard);

router.delete('/deleteBillboard/:billboardId', ClerkExpressRequireAuth(), deleteBillboard);

export default router;