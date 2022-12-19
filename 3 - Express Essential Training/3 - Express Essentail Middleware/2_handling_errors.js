import express from "express";

const app = express();
const PORT = 3000;

app.get("/class", (req, res) => {
  throw new Error();
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something is broken!");
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
