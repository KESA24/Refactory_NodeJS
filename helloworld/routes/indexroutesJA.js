const express = require('express');
const router = express.Router();

const Registration = require('../models/registration')

// specify what to do when user hit the '/'(home page) route/endpoint

//Get the form
router.get('/', (req,res)=>{
    res.render('formJA', { title: 'Registration form' })
})

//Send/save data to the database

router.post('/', (req,res)=>{
   console.log(req.body);

   const registration = new Registration(req.body);
         registration.save()
        .then(() => { res.send('Thank you for your registration!'); })
        .catch((err) => {
            console.log(err);
            res.send('Sorry! Something went wrong.');
    });

      //res.render('formJA', { title: 'Registration form' })
})

// Asynchronous 
router.post('/', async(req,res)=>{
    try{
        const registration = new Registration(req.body);
        await registration.save(() => {
            res.send('Thank you for your registration!')
        })
    }
    catch(err) {
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
    }   
})


//Retrieve data from the database
router.get('/userlist' , (req,res)=>{

    let items = await Registration.find()
})
module.exports = router;