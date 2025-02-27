import { Router } from 'express';
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';
import {
  createColor,
  deleteColor,
  getColors,
  getColorById,
  updateColor,
} from '../../../controllers/admin/colors/colorController';

const router = Router();

router.get('/:storeId/colors', getColors);
router.get('/:storeId/colors/:colorId', getColorById);

router.post('/:storeId/colors', ClerkExpressRequireAuth(), createColor);
router.patch('/:storeId/colors/:colorId', ClerkExpressRequireAuth(), updateColor);
router.delete(
  '/:storeId/colors/:colorId',
  ClerkExpressRequireAuth(),
  deleteColor
);
export default router;
