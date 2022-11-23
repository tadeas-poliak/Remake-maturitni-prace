const path = require("path")
const user_model = require(path.join(__dirname,"..","model","user_model.js"))

exports.login_page = (req,res) =>
{
    res.render("login")
}


exports.register_page = (req,res) =>
{
    res.render("register")
}


//actions
exports.login = (req,res) =>
{
    res.send({answer:true})
}

exports.register = (req,res) =>
{
    res.send({answer:user_model.add_user(req.body.name,req.body.password)})
}
