const express = require("express");
const passport = require('passport');
const router = express.Router();


const { signup, 
    login, 
    logout, 
    currentUser,
    updateUser,
    googleInit, 
    googleCb 
} = require('../controllers/auth')




//Login route
router.post("/login", login);

//Signup route
router.post("/signup", signup);

//Logged In user
router.get('/current-user', currentUser)

//Update user
router.put('/userUpdate', updateUser)

//Logout user
router.get("/logout", logout);

//Google authentication routes
router.get('/auth/google', googleInit)
router.get('/auth/google/callback', googleCb)

module.exports = router;