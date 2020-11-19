// Dependencies
const express = require("express"); 
const mongoose = require("mongoose"); 
const bodyParser = require("body-parser");
const path = require("path"); //Pug
require("dotenv/config"); //Db hidden

//Routes Folders
const indexRoutes = require("./routes/indexroutesJA"); //Classroutes
const routes = require("./routes/routes"); //Assignmentroutes
const app = express(); //Execute express by calling the express() function and assign it to the variable "app"


  // Configurations
  app.set("view engine", "pug"); 
  app.set("views", path.join(__dirname, "views"));
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json()); //Middleware:Use the body-parser

  // Use the imported routes
  app.use( indexRoutes);
  app.use(routes);
  
  //Return an HTML file
  app.get("/htmlfile", (req, res) => {
    res.sendFile(__dirname + "/index.html"); 
  });
  
  //Simple request time logger for a specific route
  app.use((req, res, next) => {
      console.log('A new request received at ' + Date.now());
      next();
  });
  
  //Error Page for non existent routes requests to the server.
  app.get('*',(req,res)=>{
      res.send('error page')
  })
  
  //Connection to public folder
  app.use(express.static(path.join(__dirname, 'public')));
  

//Db connection
  mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });

  mongoose.connection
    .on('open', () => {
      console.log('Mongoose connection open');
    })
    .on('error', (err) => {
      console.log(`Connection error: ${err.message}`);
    });

//Created a server and have it listen on port 5000
app.listen(5000, () => console.log("Listening on port 5000")); 






