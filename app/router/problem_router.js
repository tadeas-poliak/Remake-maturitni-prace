const express = require("express"); 
const controller = require(__dirname+"/../controller/controller");
const problem_controller = require(__dirname+"/../controller/problem_controller");

const problem_router = express.Router();


problem_router.get("/new",controller.is_logged_in,problem_controller.new)
problem_router.get("/edit/:problem_id",controller.is_logged_in,problem_controller.edit)
problem_router.get("/list/:user_id",controller.is_logged_in,problem_controller.list)

//actions
problem_router.post("/add",controller.is_logged_in,problem_controller.add)
problem_router.post("/change/:problem_id",controller.is_logged_in,problem_controller.change)
problem_router.post("/delete",controller.is_logged_in,problem_controller.delete)

module.exports = problem_router;