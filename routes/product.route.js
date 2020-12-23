const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
  } = require("../controller/product.controller");
  
  //Invoked middleware.
  const advanceResults = require("../middleware/advanceResults");
  //const { protect, permission } = require("../middleware/auth");
  
  //Product model
  const Product = require("../model/product");
  
  //Include other resource Router
 // const reviewRouter = require("./review");
  
  const router = require("express").Router();
  
  router.get('/', advanceResults(Product, {
    path: "Reviews",
    select: "title",
  }),getProducts);
  
    router.post('/', createProduct);
  
 // router.use("/:productId/reviews", reviewRouter);
  
  router
    .route("/:productId")
    .get(getProduct)
    .put(updateProduct)
    .delete(deleteProduct);
  
  module.exports = router;
  