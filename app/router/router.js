const express = require("express"); 
const controller = require(__dirname+"/../controller/controller");

const router = express.Router();


//Pages that need to have user logged in  
//main page with all posted problems
router.get("/",controller.home)


module.exports = router;