const express = require('express');
const { showStudents, createStudent, showStudent, updateStudent, deleteStudent } = require('../controller/student.controller');

const route = express.Router();

//==============>GET
route.get('/', showStudents);
route.get('/:id', showStudent);

//==============>POST
route.post('/',createStudent);

//==============>UPDATE
route.put('/:id',updateStudent);

//==============>DELETE
route.delete('/:id',deleteStudent);


module.exports =route;
