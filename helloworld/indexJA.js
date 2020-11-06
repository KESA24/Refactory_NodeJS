// import express in our project using require key word

//dependencies
const express = require('express')
const bodyParser = require('body-parser') 
const indexRoutes = require("./routes/indexroutesJA");
require("dotenv/config")
const mongoose = require("mongoose");



// const Registration = mongoose.model('Registration')


// const teachingRoutes = require('./routes/teachingroutes');


// create an express application by calling the express() function
// Instantiations
const app = express();

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
  mongoose.connection
    .on('open', () => {
      console.log('Mongoose connection open');
    })
    .on('error', (err) => {
      console.log(`Connection error: ${err.message}`);
    });

//Configs
app.set('view engine', 'pug');
app.set('views', './views');

// middleware settings
//Simple request time logger for a specific route
app.use((req, res, next) => {
    console.log('A new request received at ' + Date.now());
    next();
});

app.use(bodyParser.urlencoded({extended: true}))

app.use('/', indexRoutes);
// app.use('/teaching', teachingRoutes);

app.get('*',(req,res)=>{
    res.send('error page')
})

//server
//created a server and have it listen on port 3000
app.listen(3000, ()=> console.log('listening on port 3000'))