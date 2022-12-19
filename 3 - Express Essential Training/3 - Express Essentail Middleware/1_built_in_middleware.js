import express from "express";

const app = express();
const PORT = 3000;

// Using express.json and express.urlencoded
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST - express.json and express.urlencoded
app.post("/item", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
