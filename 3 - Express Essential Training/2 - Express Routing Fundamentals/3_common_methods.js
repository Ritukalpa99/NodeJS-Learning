import express from "express";

const app = express();
const PORT = 3000;

// root
app.get("/", (req, res) => {
  res.send("HOME PAGE");
});
// GET - download
app.get("/download", (req, res) => {
  res.download("./MOCK_DATA.json");
});

// GET - redirect
app.get("/redirect", (req, res) => {
  res.redirect("http://www.linkedin.com");
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
