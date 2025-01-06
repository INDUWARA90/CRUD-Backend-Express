const Student = require('../model/student.model');

//===========>create Student

const createStudent = async (request, response) => {
    try {

        const student = await Student.create(request.body);
        response.status(200).json(student);

    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

//===========>Show Student
const showStudent = async (requset, response) => {
    try {
        const { id } = requset.params;
        const student = await Student.findById(id);

        if (student === null)
            response.status(200).json({ message: "Student Not In Database" });


        response.status(200).json(student);
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}
//===========>Show All

const showStudents = async (requset, response) => {
    try {
        const student = await Student.find();
        response.status(200).json(student);
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

//===========>Update Student
const updateStudent = async (request, response) => {

    try {

        const { id } = request.params;
        await Student.findByIdAndUpdate(id, request.body);
        const updatedStudent = await Student.findById(id);

        response.status(200).json(updatedStudent);

    } catch (error) {
        response.status(500).json({ message: error.message })
    }

}

//===========>Delete Student

const deleteStudent = async (request, response) => {

    try {

        const { id } = request.params;
        await Student.findByIdAndDelete(id);
        response.status(200).json({ message: "Student Remove" });

    } catch (error) {
        response.status(500).json({ message: error.message })
    }

}



module.exports = {
    createStudent,
    showStudents,
    showStudent,
    updateStudent,
    deleteStudent
}