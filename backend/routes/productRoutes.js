import express from "express";

import {
    addProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    getLowStock,
    getCategoryReport,
} from "../controller/productController.js";

const router = express.Router();

router.post("/", addProduct);
router.get("/", getProducts);
router.get("/low-stock", getLowStock);
router.get("/:id", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/category/:category", getCategoryReport);

export default router;
