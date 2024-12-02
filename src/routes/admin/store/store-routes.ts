import { Router } from 'express';
import { createStore } from '../../../controllers/admin/store/createStore';
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';
import { getStore } from '../../../controllers/admin/store/getStore';
import { getUserHasStore } from '../../../controllers/admin/store/getUserHasStore';
import { getStoresList } from '../../../controllers/admin/store/getStoresList';
import {
  deleteStore,
  updateStore,
} from '../../../controllers/admin/store/updateStorePrefrences';

const router = Router();

router.get('/getStore/:storeId', ClerkExpressRequireAuth(), getStore);
router.get('/checkIfUserHasStore', ClerkExpressRequireAuth(), getUserHasStore);
router.get('/getStoresList', ClerkExpressRequireAuth(), getStoresList);

router.patch('/updateStore/:storeId', ClerkExpressRequireAuth(), updateStore);

router.post('/create-store', ClerkExpressRequireAuth(), createStore);

router.delete('/deleteStore/:storeId', ClerkExpressRequireAuth(), deleteStore);

export default router;
