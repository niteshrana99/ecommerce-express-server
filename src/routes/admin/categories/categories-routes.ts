import { Router } from "express";
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';
import { getCategories } from "../../../controllers/admin/categories/getCategories";
import { getCategoryById } from "../../../controllers/admin/categories/getCategoryById";
import { createCategory } from "../../../controllers/admin/categories/createCategory";
import { updateCategory } from "../../../controllers/admin/categories/updateCategory";
import { deleteCategory } from "../../../controllers/admin/categories/deleteCategory";

const router = Router();

router.get('/:storeId/categories', ClerkExpressRequireAuth(), getCategories);
router.get('/:categoryId/category', ClerkExpressRequireAuth(), getCategoryById);
router.post('/createCategory', ClerkExpressRequireAuth(), createCategory);
router.patch('/updateCategory', ClerkExpressRequireAuth(), updateCategory);
router.patch('/updateCategory', ClerkExpressRequireAuth(), updateCategory);
router.delete('/deleteCategory/:categoryId', ClerkExpressRequireAuth(), deleteCategory);

export default router;