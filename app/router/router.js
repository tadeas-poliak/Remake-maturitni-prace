const express = require("express");
const path = require("path") 
const controller = require(path.join(__dirname,"..","controller","controller"));
const user_controller = require(path.join(__dirname,"..","controller","user_controller"));
const router = express.Router();


//Pages that need to have user logged in  
//main page with all posted problems

router.get("/",user_controller.is_logged_in,controller.home)


module.exports = router;