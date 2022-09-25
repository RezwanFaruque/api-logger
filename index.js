const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const database = mongoose.connection;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect('mongodb://localhost:27017/apilogger',
{
  useNewUrlParser: true
}
);


database.on("error" , console.error.bind(console, "connection error: "));
database.once("open",() => console.log('connection establised'));


app.get('/' , (req, res) =>{
    
})


app.listen(3000,() => {
    console.log("testing");
})
