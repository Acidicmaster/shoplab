const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/user.controller");

//Invoked middleware.
const advanceResults = require("../middleware/advanceResults");
//const { protect, permission } = require("../middleware/auth");

//User model
const User = require("../model/user");

const router = require("express").Router();

//router.use(protect);
//router.use(permission("admin"));

//router.route("/").get(advanceResults(User), getUsers).post(createUser);

//router.route("/").get(User, getUsers).post(createUser);
//router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

 // Create a new Person
 router.post('/', createUser);

 // Retrieve all 
 router.get('/',advanceResults(User),  getUsers);

 // Retrieve a single person with Id
 router.get('/:Id', getUser);

 // Update a Person with Id
 router.put('/:Id',updateUser);

 // Delete a person with Id
router.delete('/:Id', deleteUser);
module.exports = router;


module.exports = router;
