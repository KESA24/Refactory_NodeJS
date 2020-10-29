const express = require("express"); //Importing express package into this file
const mongoose = require("mongoose"); //Import mongoose: video1
const bodyParser = require("body-parser"); //Importing Bodyparser into our project
const path = require("path"); //Importing Pug to file: Classwork
require("dotenv/config"); //Import the dotenv for hiding database creds: video1

const app = express(); //Execute express by calling the express() function and assign it to the variable "app"
app.use(bodyParser.json()); //Middleware:Use the body-parser

app.set("view engine", "pug"); //Use pug
app.set("views", path.join(__dirname, "views"));

const routes = require("./routes/routes"); //Import Routes from video1
app.use(routes);

const userRoutes = require("./routes/users"); //Import User routes from video2
app.use("/", userRoutes);

app.get("/htmlfile", (req, res) => {
  res.sendFile(__dirname + "/index.html"); //Return an HTML file
});
//Connection to public folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log("Listening on port 3000")); //Created a server and have it listen on port 3000

//Database Connections!

//According to video1, works but yet to be tested
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Finally connected to the database!!");
  }
);

//According to Medium artice, still confusing!
// const MongoClient = require("mongodb").MongoClient;
// MongoClient.connect(
//   "mongodb+srv://kesa:spoiling11@helloworld.auuw9.mongodb.net/<dbname>?retryWrites=true&w=majority",
//   { useUnifiedTopology: true },
//   (err, database) => {}
// );

// const client = new MongoClient(url, { useNewUrlParser: true });
// client.connect((err, database) => {
//   db = database.db("test");
//   app.listen(3000, function () {});
// });
