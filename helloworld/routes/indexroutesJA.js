const express = require('express');
const router = express.Router();

// specify what to do when user hit the '/'(home page) route/endpoint
router.get('/', (req,res)=>{
    res.render('formJA', { title: 'Registration form' })
})

router.post('/', (req,res)=>{
   console.log(req.body);
   res.render('formJA', { title: 'Registration form' })
})

module.exports = router;