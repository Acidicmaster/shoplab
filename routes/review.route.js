const {
    getReview,
    getReviews,
    createReview,
    updateReview,
    deleteReview,
    updateRating,
  } = require("../controller/review.controller");
  
  const router = require("express").Router({ mergeParams: true });
  
  //Invoked middleware
  const advanceResults = require("../middleware/advanceResults");
//  const { protect } = require("../middleware/auth");
  
  //Review model
  const Review = require("../model/review");
  
  router
    .route("/")
    .get(
      advanceResults(Review, {
        path: "productId",
        select: "name brand",
      }),
      getReviews
    )
    .post(createReview);
  
  router
    .route("/:id")
    .get(getReview)
    .put(updateReview)
    .delete(deleteReview);
  router.route("/update-rating/:id").put(updateRating);
  
  module.exports = router;
  