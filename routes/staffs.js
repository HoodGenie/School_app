const express = require("express");

// initialise the staff route
const staffsRoute = express.Router();

// CRUD operations
staffsRoute.get("/", (req, res) => { // get the list of all the staff members
  res.status(200).send("This is a list of all staffs"); 
});
staffsRoute.post("/", (req, res) => { // add a staff to the list of staff members
  res.status(200).send("Staff successfully added");
});
staffsRoute.put("/", (req, res) => { // updates a staff's information
  res
    .status(200)
    .send("The selected staff information has been updated");
});
staffsRoute.delete("/", (req, res) => { // deletes a staff from the list
  res.status(200).send("Staff successfully delted");
});

// export the router to app.js so it can be used in the middlewear.
module.exports = staffsRoute;
