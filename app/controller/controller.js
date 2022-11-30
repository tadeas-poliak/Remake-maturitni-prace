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

//middleware
exports.is_logged_in = (req,res,next) =>
{
    let name = Object.values(req.cookies)[0]    
    let password = Object.values(req.cookies)[1]    
    if(name != undefined && password != undefined)
    {
        //Checking if user is logged in
        if(user_model.is_user_in_database(name,password) == true)
        {
            console.log("yo")
            next();//if so we pass to next controller
    
        }
    }
    res.redirect("/user/loginPage")
}
//actions
exports.login = (req,res) =>
{
    
    let answer = user_model.is_user_in_database(req.body.name,req.body.password)
    if(answer)
    {
        //5 minutes expiration
        let expiration = 5*60*1000
        res.cookie("name",req.body.name,{maxAge:expiration})
        res.cookie("password",req.body.password,{maxAge:expiration})
    }
    res.send({answer})
}

exports.register = (req,res) =>
{
    res.send({answer:user_model.add_user(req.body.name,req.body.password)})
}
