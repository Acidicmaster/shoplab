const {
    getOrders,
    authOrder,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder,
    payment,
    deliverOrder,
  } = require("../controller/order.controller");
  
  //Invoked middleware.
  const advanceResults = require("../middleware/advanceResults");
  //const { protect } = require("../middleware/auth");
  
  //Product model
  const Order = require("../model/order");
  
  const router = require("express").Router();
  
  //router.use(protect);
  //const { permission } = require("../middleware/auth");
  
  router
    .route("/")
    .get(
      advanceResults(Order, {
        path: "userId",
        select: "name email",
      }),
      getOrders
    )
    .post(createOrder);
  router.route("/authOrders").get(authOrder);
  
  router.route("/:orderId").get(getOrder).put(updateOrder).delete(deleteOrder);
  
  router.route("/:orderId/pay").post(payment);
  router.route("/:orderId/deliver").post(deliverOrder);
  
  module.exports = router;
  