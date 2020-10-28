
//Importing express package into this file 
const  express = require ('express');

//Import mongoose
const mongoose = require('mongoose')

//Importing Bodyparser into our project
const bodyParser= require('body-parser');

//Import the dotenv
require('dotenv/config');

//Importing Pug to file
const path = require('path')

//Execute express by calling the express() function and assign it to the variable "app"
const app = express();
//Middleware: 
//Use the body-parser
app.use(bodyParser.urlencoded({extended: true}));
//Use pug
app.set('view engine','pug')
app.set('views', path.join(__dirname, 'views'))

//Import Routes
const routes = require('./routes/routes')
app.use(routes);

//Connect to DB
mongoose.connect( process.env.DB_CONNECTION,{useNewUrlParser: true, useUnifiedTopology: true }, ()=>{
    console.log('Finally connected to the database!!')
})

// How to start listening to the server
//Created a server and have it listen on port 3000
app.listen(3000, () => console.log("Listening on port 3000"))
