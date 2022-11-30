const path = require("path");
const express = require("express"); 
var bodyParser = require('body-parser');
const session = require("express-session")
const cookieParser = require("cookie-parser")
const app = express();

//----ROUTERS----
//  main router
const router = require(path.join(__dirname,"router","router.js"));
//user router
const user_router = require(path.join(__dirname,"router","user_router.js")) 

//////////////////////

//directory with ejs files
app.set('views', __dirname+'/view')

//setting view engine as EJS
app.set('view engine', 'ejs');

app.use(express.urlencoded({limit: '50mb', extended: false, parameterLimit: 1000000}));
app.use(bodyParser.json());
app.use(express.json());
//sesison
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: true  ,
  saveUninitialized: true,
  cookie: { secure: true }
}))
app.use(cookieParser())

//directory to static files
app.use(express.static(path.join(__dirname ,'www')))

//Route paths
//app.use for sub categories in URL address
app.use("/",router);
app.use("/user",user_router);


module.exports = app;