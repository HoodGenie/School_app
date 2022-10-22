const express = require("express");
const stuController = require("../controller/stuController");

// initialise the studentsRoute
const studentsRoute = express.Router();

studentsRoute.post("/", stuController.addStudent);
studentsRoute.get("/", stuController.getAllStudents);
studentsRoute.put("/:id", stuController.updateStudInfoById);
studentsRoute.delete("/:id", stuController.deleteStudentById);

// export the studentsRoute to app,js
module.exports = studentsRoute;
