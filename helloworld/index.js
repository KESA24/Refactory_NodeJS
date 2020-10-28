
//Importing express in our project using require keyword
const  express = require ('express');

//Importing Bodyparser into our project
const bodyParser= require('body-parser');

//Importing Pug to file
const path = require('path')

// //const MongoClient = require('mongodb').MongoClient  
// MongoClient.connect('link to database', (err, database) => {
//     // ... start the server 
//  })

//Creating an express application by calling the express() function
const app = express();
//Use the body-parser
app.use(bodyParser.urlencoded({extended: true}));
//Use pug
app.set('view engine','pug')
app.set('views', path.join(__dirname, 'views'))

//specify what to do when the user hits the '/'(home page) route endpoint
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

//Created a server and have it listen on port 3000
app.listen(3000, () => console.log("Listening on port 3000"))
