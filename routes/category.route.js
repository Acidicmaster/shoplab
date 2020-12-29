const {
    getCategories,
    getCategory,
    addCategory,
    updateCategory,
    removeCategory,
  } = require("../controller/category.controller");
  
  //Invoked middleware.
  const advanceResults = require("../middleware/advanceResults");
  //const { protect, permission } = require("../middleware/auth");
  
  //User model
  const Category = require("../model/category");
  
  const router = require("express").Router();
  
  router
    .route("/")
    .get(advanceResults(Category), getCategories).post(addCategory);
   // .post(protect, permission("admin"), addCategory);
  
  router
    .route("/:categoryId")
    .get(getCategory)
    .put(updateCategory)
    .delete(removeCategory);
  
  module.exports = router;
  