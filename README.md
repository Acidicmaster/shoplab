# shoplab
 A Nodejs e-commerce application

Main endpoints
 #  * User endpoints 
     -data --> 
     - name - type string
     - email - type string
     - password - type string
    + >kenneth-uche-shop.herokuapp.com/api/user --> get all users & create user
    + >kenneth-uche-shop.herokuapp.com/api/user/:id --> get user , update user & delete user
    ___
#   * authentication endpoints
 + >kenneth-uche-shop.herokuapp.com/api/auth/register --> register user
 + >kenneth-uche-shop.herokuapp.com/api/auth/login --> login user
 + >kenneth-uche-shop.herokuapp.com/api/auth/update/userdetail --> update user
 + >kenneth-uche-shop.herokuapp.com/api/auth/update/password --> update password
 + >kenneth-uche-shop.herokuapp.com/api/auth/forgotpassword --> forgot password
 + >kenneth-uche-shop.herokuapp.com/api/auth/resetPassword --> reset password
 + >kenneth-uche-shop.herokuapp.com/api/auth/verifyemail --> verify email
  ___
 
 #  * products endpoints
      -data --> 
      - name - type string
      - productImage - type file
      - brand - type string
      - price - type Number
      - category - type sting
      - countInStock - type number
      - description - type string
      - averageRating - type Number from 1 to 10
     + >kenneth-uche-shop.herokuapp.com/api/product --> get all products & create products
     + >kenneth-uche-shop.herokuapp.com/api/product/:productId --> get  product , update product & delete product
     + >kenneth-uche-shop.herokuapp.com/api/product/:productId/reviews --> get product reveiw
     ___
 #  * category endpoints
   -data --> 
     - categoryName - type string
         +  >kenneth-uche-shop.herokuapp.com/api/category --> get  all category & create category
         + >kenneth-uche-shop.herokuapp.com/api/category/:categoryId --> get category & update category & delete 
         ___
#   * order endpoints
   -data --> 
     - categoryName - type string
  * review endpoints
  ___
#  *Tech features*
* Mongo DB
* Node Js
---
##  API features
####  cloudinary
    
