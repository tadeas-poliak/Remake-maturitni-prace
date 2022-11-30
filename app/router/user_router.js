const express = require("express");
const path = require("path") 
const controller = require(path.join(__dirname,"..","controller","controller"));
const user_controller = require(path.join(__dirname,"..","controller","user_controller"));
const router = express.Router();


//Pages that need to have user logged in  
//main page with all posted problems

router.get("/",controller.is_logged_in,user_controller.home)
router.get("/newProblem",controller.is_logged_in,user_controller.new_problem)


//actions
router.post("/addProblem",controller.is_logged_in,user_controller.add_problem)
module.exports = router;