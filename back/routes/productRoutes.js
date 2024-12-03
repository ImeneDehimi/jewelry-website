const express = require("express");
const router = express.Router();
const productController = require("../controller/productController")


// create a product 
router.post("/",productController.postProduct)

// get all products  
router.get("/", productController.getProducts)

// get one product
router.get("/:id", productController.getProduct)


// update a product 
router.patch("/:id", productController.updateProduct)


// delete a product 
router.delete("/:id", productController.deleteProduct)

module.exports = router;