const express = require('express');
const app = express();
const todo = require('./Routes/Routes')
require('dotenv').config();
const connectDB = require('./DB/Connect');

//Adding Json 
app.use(express.json());

app.use('/api/v1/todo', todo);


const port = 5000;

const start = async ()=> {
   try {
    await connectDB(process.env.MONGO_URI);
    app.listen(5000, ()=> {
        console.log("Server started on port 5000...");
    })
   } catch (error) {
        console.log(error)
   }
}

start();
