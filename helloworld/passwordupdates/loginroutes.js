const express = require('express');
const router = express.Router();
const passport = require('passport');

// gets and displays a login page
router.get('/', (req, res) => {
    res.render('login', { title: 'Login form' })
})

//process the username and password that are submitted in the login page
router.post('/', passport.authenticate('local'), (req,res) =>{
    req.session.user = req.user;
    res.redirect('/userlist');
})

module.exports = router;