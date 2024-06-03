const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

// get products
router.get("/", getProducts);
router.get("/:id", getProduct);

// post product

router.post("/", postProduct);

// update product

router.put("/:id", updateProduct);

// delete product

router.delete("/:id", deleteProduct);

module.exports = router;
