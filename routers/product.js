import { Router } from "express";
import {
    getAllProducts,
    getProductById,
    getProductsBySearch,
    createProduct,
    updateProduct,
    deleteProduct // Import delete function
} from "../controllers/product.js";

const router = Router();

// Existing routes
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.get("/search/:search", getProductsBySearch);

// Create new product
router.post("/", createProduct);

// Update existing product
router.put("/:id", updateProduct);

// Delete product
router.delete("/:id", deleteProduct); // Tambahkan route untuk delete

export default router;
