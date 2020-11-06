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

// Asynchronous,save data to the database
router.post('/', async(req,res)=>{
    try{
        const registration = new Registration(req.body);
        await registration.save(() => {
            console.log('save success')
            res.redirect('/userlist')
        })
    }
    catch(err) {
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
    }   
})

// retrieve data from the database 
router.get('/userlist', async(req, res)=>{
    try{
        let items = await Registration.find()
        res.render('list', { users: items})
    }catch(err){
        res.status(400).send("Unable to find items in the database");
    }  
})


module.exports = router;