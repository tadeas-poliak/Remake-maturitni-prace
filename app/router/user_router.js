const express = require("express"); 
const user_controller = require(__dirname+"/../controller/user_controller");

const user_router = express.Router();

//login page
user_router.get("/loginPage",user_controller.login_page)
user_router.get("/registerPage",user_controller.register_page)


//actions
user_router.post("/login",user_controller.login)


module.exports = user_router;