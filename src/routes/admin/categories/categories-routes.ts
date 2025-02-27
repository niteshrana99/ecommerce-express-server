import { Router } from "express";
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';
import { getCategories } from "../../../controllers/admin/categories/getCategories";
import { getCategoryById } from "../../../controllers/admin/categories/getCategoryById";
import { createCategory } from "../../../controllers/admin/categories/createCategory";
import { updateCategory } from "../../../controllers/admin/categories/updateCategory";
import { deleteCategory } from "../../../controllers/admin/categories/deleteCategory";

const router = Router();

router.get('/:storeId/categories', getCategories);
router.get('/:storeId/categories/:categoryId', getCategoryById);
router.post('/:storeId/categories', ClerkExpressRequireAuth(), createCategory);
router.patch('/:storeId/categories/:categoryId', ClerkExpressRequireAuth(), updateCategory);
router.delete('/:storeId/categories/:categoryId', ClerkExpressRequireAuth(), deleteCategory);

export default router;