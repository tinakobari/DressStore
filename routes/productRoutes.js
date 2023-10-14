const express = require('express');
const {
    getAllProducts,
    getProductById,
    addNewProduct,
    updateProductById,
    removeProductById,
    searchProductsByName,
} = require('../controllers/products');
const router = express.Router();

// GET all products (api/products)
router.route("/").get(getAllProducts);

// GET product by ID (api/products/:id)
router.route("/:id").get(getProductById);

// POST new product (api/products)
router.route("/").post(addNewProduct);

// PUT (Update) a product by ID (api/products/:id)
router.route("/:id").put(updateProductById);

// DELETE a product by ID (api/products/:id)
router.route("/:id").delete(removeProductById);

// GET products by name search (api/products/search/:keyword)
router.route("/search/:keyword").get(searchProductsByName);

module.exports = router;