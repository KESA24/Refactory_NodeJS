
//Concept from Video2

const express = require ("express");

const router = express.Router();

const users =[
    {
        firstName: "John",
        LastName: "Doe",
        age: 25
    },
    {
        firstName: "Johnny",
        LastName: "Duck",
        age: 26
    }
]

router.get('/users', (req,res)=>{
    res.send(users);

    res.send("Hello from here");
});

router.post('/users', (req,res) => {
    const user = req.body;

    users.push(user);

    res.send('user with the name + user.firstName + added to database!');
})
 router.get ('/:name', (req,res)=>{
     console.log(req.params)
     res.send
 })
module.exports = router;