import { Router } from "express";
import { createBillboard } from "../../../controllers/admin/billboard/createBillboard";
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';
import { getAllBillbaords } from "../../../controllers/admin/billboard/getAllBillbaords";
import { getBillBoardById } from "../../../controllers/admin/billboard/getBillboardById";
import { updateBillboard } from "../../../controllers/admin/billboard/updateBillboard";
import { deleteBillboard } from "../../../controllers/admin/billboard/deleteBillboard";

const router = Router();

router.get('/:storeId/billboards', getAllBillbaords);
router.get('/:storeId/billboards/:billboardId', getBillBoardById);

router.post('/:storeId/billboards', ClerkExpressRequireAuth(), createBillboard);

router.patch('/:storeId/billboards/:billboardId', ClerkExpressRequireAuth(), updateBillboard);

router.delete('/:storeId/billboards/:billboardId', ClerkExpressRequireAuth(), deleteBillboard);

export default router;