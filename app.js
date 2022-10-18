const express = require("express");
require("dotenv").config();
const staffsRoute = require("./routes/staffs");
const studentsRoute = require("./routes/students");

const app = express();
const PORT = process.env.PORT;

// middlewares (app.use)
app.use(express.json());
// when the '/staff' is entered in the browser the staffsRoute is called.
app.use("/staff", staffsRoute);
// when the '/students' is entered in the browser the studentsRoute is called.
app.use("/students", studentsRoute);

// CRUD Operations
app.get("/", (req, res) => {
  res.status(200).send("General Homepage");
});
app.post("/", (req, res) => {
  res.status(200).send("Successfully uploded information");
});
app.put("/", (req, res) => {
  res.status(200).send("Successfully updated information");
});
app.delete("/", (req, res) => {
  res.status(200).send("Successfuly deleted information");
});

// server ears
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
