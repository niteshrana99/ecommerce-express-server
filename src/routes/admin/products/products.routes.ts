import { Router } from "express";
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';
import { getAllProducts } from "../../../controllers/admin/products/getAllProducts";
import { getProductById } from "../../../controllers/admin/products/getProductById";
import { createProduct } from "../../../controllers/admin/products/createProduct";
import { updateProduct } from "../../../controllers/admin/products/updateProduct";
import { deleteProduct } from "../../../controllers/admin/products/deleteProduct";

const router = Router();

router.get('/:storeId/products', getAllProducts);
router.get('/:storeId/products/:productId', getProductById);
router.post('/:storeId/products', ClerkExpressRequireAuth(), createProduct);
router.patch('/:storeId/products/:productId', ClerkExpressRequireAuth(), updateProduct);
router.delete('/:storeId/products/:productId', ClerkExpressRequireAuth(), deleteProduct);


export default router;