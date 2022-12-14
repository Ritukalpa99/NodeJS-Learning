import { assert } from "console";
import express from "express";
import data from "./MOCK_DATA.json" assert { type: "json" };

const app = express();
const PORT = 3000;

// GET with next()
app.get(
  "/next",
  (req, res, next) => {
    console.log("The response will be sent by the next function");
    next();
  },
  (req, res) => {
    res.send("I set up a route with a second callback");
  }
);

//GET with Routing
app.get("/class/:id", (req, res) => {
  const studentId = Number(req.params.id);

  const student = data.filter((student) => student.id === studentId);
  res.send(student);
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
