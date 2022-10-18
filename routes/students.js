const express = require("express");

// initialise the studentsRoute
const studentsRoute = express.Router();

studentsRoute.get("/", (req, res) => {
  // get the list of all the students
  res.status(200).send("This is a list of all the students");
});
studentsRoute.post("/", (req, res) => {
  // add student to the list
  res.status(200).send("Student successfully added");
});
studentsRoute.put("/", (req, res) => {
  // to update a student's info
  res.status(200).send("The selected student info has already been uploaded");
});
studentsRoute.delete("/", (req, res) => {
  // to delete a student from the list
  res.status(200).send("Student successfully deleted");
});

// export the studentsRoute to app,js
module.exports = studentsRoute