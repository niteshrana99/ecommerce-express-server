import { Router } from "express";
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';

import { getSizes } from "../../../controllers/admin/sizes/getSizes";
import { createSize } from "../../../controllers/admin/sizes/createSize";
import { getSizesById } from "../../../controllers/admin/sizes/getSizeById";
import { updateSize } from "../../../controllers/admin/sizes/updateSize";
import { deleteSize } from "../../../controllers/admin/sizes/deleteSize";

const router = Router();

router.get('/:storeId/sizes', ClerkExpressRequireAuth(), getSizes);
router.get('/:storeId/size/:sizeId', ClerkExpressRequireAuth(), getSizesById);

router.post('/:storeId/createSize', ClerkExpressRequireAuth(), createSize);
router.patch('/:storeId/updateSize', ClerkExpressRequireAuth(), updateSize)
router.delete('/:storeId/deleteSize/:sizeId', ClerkExpressRequireAuth(), deleteSize)
export default router;