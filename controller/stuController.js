const studentModel = require("../models/studentmodel");

async function addStudent(req, res) {
  const newStudent = req.body;
  try {
    const student = await studentModel.create(newStudent);
    res.status(200).json({
      message: "Student added successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

async function getAllStudents(req, res) {
  try {
    const allStudents = await studentModel.findAll();
    res.status(200).json(allStudents);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

async function updateStudInfoById(req, res) {
  const studentid = req.params.id;
  const newInfo = req.body;
  try {
    const updatedInfo = await studentModel.update(newInfo, {
      where: {
        id: studentid,
      },
    });
    res.status(200).json({
      message: "Student info updated",
      data: updatedInfo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

async function deleteStudentById() {
  const studentID = req.params.id;
  try {
    const studentInfo = await studentModel.destroy({ where: { id: studentID } });
    res.status(200).json({
      message: "Student Deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

module.exports = {
  addStudent,
  getAllStudents,
  updateStudInfoById,
  deleteStudentById,
};
