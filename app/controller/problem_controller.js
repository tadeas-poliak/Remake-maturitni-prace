const { reset } = require("nodemon")
const path = require("path")
const user_model = require(path.join(__dirname,"..","model","user_model.js"))


exports.new = (req,res) =>
{
    res.render("user/problem_form")
}

exports.list = (req,res) =>
{
    let name = Object.values(req.cookies)[0] 
    let user_id = user_model.get_user_id_by_name(name)
    res.render("user/problem_list",{data:{user_id}})
}