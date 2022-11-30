const express = require("express"); 
const controller = require(__dirname+"/../controller/controller");

const user_router = express.Router();

//login page
user_router.get("/loginPage",controller.login_page)
user_router.get("/registerPage",controller.register_page)


//actions
user_router.post("/login",controller.login)
user_router.post("/register",controller.register)


module.exports = user_router;