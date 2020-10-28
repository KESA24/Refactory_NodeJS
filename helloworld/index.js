
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
//ROUTES
//specify what to do when the user hits the '/'(home page) route endpoint
// "/" is the route
app.get("/" , (req, res) => {
    res.send("Homepage!Hello world, We did it Kesaaa")
});

//specify what to do when user hits the "/about" route/endpoint
app.get( '/about' , (req,res)=>{
    res.send('This is the about page')
});
//Return an HTML file
app.get( '/htmlfile', (req,res)=>{
    res.sendFile(__dirname + '/index.html');

});
//Forms
app.post('/quotes', (req,res)=>{
    console.log('Helooooooooo');
    console.log(req.body); //Displays browser form data in console and dependant on bodyparser
});

//PathParams and Query Params
app.get("/pathparams/:name", (req,res)=>{
    res.send("my path param is"+ req.params.name);
})

//Query Params
app.get("/user", (req,res)=>{
    res.send('This is class'+ req.query.class + 'cohort' + req.query.cohort)
})

app.get('/pugform', (req,res) => {
    res.render("form")
});

//Middleware
app.use('/posts', ()=>{
    console.log('This is a middleware running')
})

//Connect to DB
mongoose.connect( process.env.DB_CONNECTION,{useNewUrlParser: true, useUnifiedTopology: true }, ()=>{
    console.log('connected to db!')
})

// How to start listening to the server
//Created a server and have it listen on port 3000
app.listen(3000, () => console.log("Listening on port 3000"))
