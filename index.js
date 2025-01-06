const express = require('express');
const mongoose = require('mongoose');
const studentRoute = require('./routes/student.route');

const app = express();

//=====Port Define=========
const Port = 3001;

//=====Middlewares=========
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/students',studentRoute);


//=========Connect mongo and run express========>
mongoose
    .connect(
        "mongodb+srv://admin:12345@backenddb.qelui.mongodb.net/Student-CRUD?retryWrites=true&w=majority&appName=BackendDB"
    )
    .then(() => {
        console.log("Connected To Database!");
        app.listen(Port, () => {
            console.log(`Server is Running ${Port}`);
        });
    })
    .catch(() => {
        console.log("Not Connected To Database!");
    });
