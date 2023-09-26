// //importing modules
// const express = require('express')
// const userController = require('../controllers/userController')
// const { signup, login } = userController
// const userAuth = require('../middlewares/userAuth')

// const router = express.Router()

// //signup endpoint
// //passing the middleware function to the signup
// router.post('/signup', userAuth.saveUser, signup)

// //login route
// router.post('/login', login )

// module.exports = router

const express = require('express');
const userController = require('../controllers/userController');
const { createUser, loginUser } = userController;
const userAuth = require('../middlewares/userAuth');

const router = express.Router();

// Signup endpoint
// Passing the middleware function to the signup
router.post('/signup', userAuth.saveUser, createUser);

// Login route
router.post('/login', loginUser);

module.exports = router;
