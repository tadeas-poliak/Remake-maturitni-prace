const path = require("path")
const model = require(path.join(__dirname,"..","model","model.js"))

exports.login_page = (req,res) =>
{
    console.log(req.body)
    res.render("login")
}


exports.register_page = (req,res) =>
{
    res.render("login")
}


//actions
exports.login = (req,res) =>
{
    res.send({answer:true})
}
