import { Router } from 'express';
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';
import {
  createSize,
  deleteSize,
  getSizes,
  getSizesById,
  updateSize,
} from '../../../controllers/admin/sizes/sizesController';

const router = Router();

router.get('/:storeId/sizes', getSizes);
router.get('/:storeId/sizes/:sizeId', getSizesById);

router.post('/:storeId/sizes', ClerkExpressRequireAuth(), createSize);
router.patch('/:storeId/sizes/:sizeId', ClerkExpressRequireAuth(), updateSize);
router.delete(
  '/:storeId/sizes/:sizeId',
  ClerkExpressRequireAuth(),
  deleteSize
);
export default router;
