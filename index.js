
//Importing express in our project using require keyword
const  express = require ('express');

//Creating an express application by calling the express() function
const app = express();

//Created a server
app.listen(3000, () => console.log("Listening on port 3000"))