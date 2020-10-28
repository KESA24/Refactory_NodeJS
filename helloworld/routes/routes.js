
const express = require('express');

const router = express.Router();

//The GET METHOD
//specify what to do when the user hits the '/'(home page) route endpoint
// "/" is the route
router.get("/" , (req, res) => {
    res.send("Homepage!Hello world, We did it Kesaaa")
});

//specify what to do when user hits the "/about" route/endpoint
router.get( '/about' , (req,res)=>{
    res.send('This is the about page')
});
//Return an HTML file
router.get( '/htmlfile', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

//PathParams and Query Params
router.get("/pathparams/:name", (req,res)=>{
    res.send("my path param is"+ req.params.name);
})

//Query Params
router.get("/user", (req,res)=>{
    res.send('This is class'+ req.query.class + 'cohort' + req.query.cohort)
})

router.get('/pugform', (req,res) => {
    res.render("form")
});


//Forms
router.post('/quotes', (req,res)=>{
    console.log('Helooooooooo');
    console.log(req.body); //Displays browser form data in console and dependant on bodyparser
});



module.exports = router;