const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../controllers/product.controllers.js");

// ROUTE TO CREATE A NEW PRODUCT
router.post("/", createProduct);

// ROUTE TO GET ALL PRODUCTS
router.get("/", getAllProducts);

// ROUTE TO GET A SINGLE PRODUCT BY ID
router.get("/:id", getProductById);

// ROUTE TO UPDATE A PRODUCT BY ID
router.put("/:id", updateProductById);

// ROUTE TO DELETE A PRODUCT BY ID
router.delete("/:id", deleteProductById);

module.exports = router;
