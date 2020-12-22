const {
    RegisterUser,
    login,
    updateDetails,
    updatePassword,
    forgotPassword,
    resetPassword,
    verificationEmail,
  } = require("../controller/auth.controller");
  //const { protect } = require("../middleware/auth");
  
  const router = require("express").Router();

  router.post('/register', RegisterUser);
  router.post('/login', login);
  router.put('/update/userdetail',updateDetails);
  router.put('/update/password', updatePassword);
  router.post('/forgotpassword', forgotPassword);
  router.post('/resetPassword', resetPassword);
  router.post('/verifyemail',verificationEmail);
  
  module.exports = router;
  