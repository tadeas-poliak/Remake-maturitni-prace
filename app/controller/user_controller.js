const path = require("path")
const user_model = require(path.join(__dirname,"..","model","user_model"))
exports.home = (req,res) =>
{
    let name = Object.values(req.cookies)[0]  
    let user_id = user_model.get_user_id_by_name(name)
   res.render("user/home",{data:{user_id}})
}


exports.new_problem = (req,res) =>
{
    res.render("user/problem_form")
}

//actions
exports.add_problem = (req,res) =>
{
    res.send({answer:true})
}
