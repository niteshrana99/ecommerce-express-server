import { Router } from 'express';
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';
import { getOrders } from '../../../controllers/admin/orders/getOrders';
import { createOrder } from '../../../controllers/admin/orders/createOrder';

const router = Router();

router.get('/:storeId/orders', ClerkExpressRequireAuth(), getOrders);
router.post('/:storeId/checkout', createOrder);
export default router;
