const express = require('express');
const router = express.Router();

const Registration = require('../models/registration')

// specify what to do when user hit the '/'(home page) route/endpoint

//Get the form
router.get('/', (req,res)=>{
    res.render('formJA', { title: 'Registration form' })
})

router.get('/test',  (req,res) =>{
    res.render('tesrting')
})
//Send/save data to the database

// router.post('/', (req,res)=>{
//    console.log(req.body);

//    const registration = new Registration(req.body);
//          registration.save()
//         .then(() => { res.send('Thank you for your registration!'); })
//         .catch((err) => {
//             console.log(err);
//             res.send('Sorry! Something went wrong.');
//     });

//       //res.render('formJA', { title: 'Registration form' })
// })

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
router.get('/userlist', async (req, res) => {
    try {
        let items = await Registration.find()

// Search Data in the datatbase   

        if (req.query.name) {
            items = await Registration.find({ name: req.query.name })
        }
        res.render('list', { title: 'User list', users: items })
    } catch (err) {
        res.status(400).send("Unable to find items in the database");
    }
})

//Delete Data from the database

router.post('/delete', async(req,res)=>{
    try{
        await Registration.deleteOne({_id: req.body.id })
        res.redirect('back')
    }catch(err){
        res.status(400).send("Unable to delete item in the database");
    }})


//Update: still not working 8/11
router.get('/update/:id', async (req, res) => {
    try {
        const updateUser = await Registration.findOne({ _id:req.params.id })
        res.render('updatepage', { user: updateUser })
    } catch (err) {
        res.status(400).send("Unable to find item in the database");
    }
})

router.post('/update', async (req, res) => {
    try {
        await Registration.findOneAndUpdate({_id:req.query.id}, req.body)
        res.redirect('userlist');
    } catch (err) {
        res.status(404).send("Unable to update item in the database");
    }    
})

router.get('/updateform', (req,res)=>{
    res.render('formkp', { title: 'Registration form' })
})


module.exports = router;