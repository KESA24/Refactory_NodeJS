
//Concept from Video1

const express = require('express');

const router = express.Router();

const posts = require('../models/post')

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

//PathParams and Query Params
router.get("/pathparams/:name", (req,res)=>{
    res.send("my path param is"+ req.params.name);
})

//Query Params
router.get("/user", (req,res)=>{
    res.send('This is class'+ req.query.class + 'cohort' + req.query.cohort)
})

//pugforms
router.get('/pugform', (req,res) => {
    res.render("form")
});

router.get('/register', (req,res) => {
    res.render("contactform")
});
router.get('/thankyou', (req,res)=>{
    res.render('thankYou')
})

router.get('/portfolio', (req,res) =>{
    res.render('portfolio')
})

//posting route
router.post('/pugform',(req,res)=>{
    console.log(res.body);
    res.render('thankYou')
  })

router.get('/puglife', (req,res)=>{
    res.render('home')
})

//Forms
router.post('/quotes', (req,res)=>{
    console.log('Helooooooooo');
    console.log(req.body); //Displays browser form data in console and dependant on bodyparser
});


router.post('/schema', (req,res)=>{
    const post = new posts({
        title: req.body.title,
        description: req.body.description
    });
    post.save()
        .then(data => {
            res.json(data);
    })
        .catch(err =>{
            res.json({message: err});
    })

});




module.exports = router;