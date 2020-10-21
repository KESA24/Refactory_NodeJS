
//Importing express in our project using require keyword
const  express = require ('express');

//Creating an express application by calling the express() function
const app = express();

//specify what to do when the user hits the '/'(home page) route endpoint
app.get("/" , (req, res) => {
    res.send("Homepage!Hello world, We did it Kesaaa")
})

//specify what to do when user hits the "/about" route/endpoint
app.get( '/about' , (req,res)=>{
    res.send('This is the about page')
})


//Created a server and have it listen on port 3000
app.listen(3000, () => console.log("Listening on port 3000"))