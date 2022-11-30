const express = require("express"); 
const controller = require(__dirname+"/../controller/controller");
const problem_controller = require(__dirname+"/../controller/problem_controller");

const problem_router = express.Router();


problem_router.get("/new",controller.is_logged_in,problem_controller.new)
problem_router.get("/list/:user_id",controller.is_logged_in,problem_controller.list)



module.exports = problem_router;