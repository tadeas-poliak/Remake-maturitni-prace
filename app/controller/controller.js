const path = require("path")
const model = require(path.join(__dirname,"..","model","model.js"))

exports.home = (req,res) =>
{
    res.render("home")
}

