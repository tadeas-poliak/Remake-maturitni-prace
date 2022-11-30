const { reset } = require("nodemon")
const path = require("path")
const user_model = require(path.join(__dirname,"..","model","user_model.js"))
const problem_model = require(path.join(__dirname,"..","model","problem_model.js"))


//Form for adding new problem
exports.new = (req,res) =>
{
    let name = Object.values(req.cookies)[0] 
    let user_id = user_model.get_user_id_by_name(name)
    res.render("user/problem_form",{data:{user_id}})
}

exports.edit = (req,res) =>
{
    let name = Object.values(req.cookies)[0] 
    let user_id = user_model.get_user_id_by_name(name)
    let problem = problem_model.get_problem_by_id(req.params.problem_id)
    res.render("user/edit_form",{data:{user_id,problem}})
}

exports.list = (req,res) =>
{
    let name = Object.values(req.cookies)[0] 
    let user_id = user_model.get_user_id_by_name(name)
    let user_problems = problem_model.get_user_problems(user_id)
    res.render("user/problem_list",{data:{user_id,user_problems}})
}


//actions
exports.add = (req,res) =>
{

}

exports.change = (req,res) =>
{
    if(req.body.title == undefined || req.body.description == undefined)
        res.send({answer:false})
    
    res.send(problem_model.change_problem(req.params.problem_id,req.body.title,req.body.description))
}

exports.delete = (req,res) =>
{

}
