import express from "express";

const app = express();
const PORT = 3000;

// app.get("/class", (req, res) => {
//   res.send("Retrieve class info");
// });
// app.post("/class", (req, res) => {
//   res.send("Create class info");
// });
// app.put("/class", (req, res) => {
//   res.send("Update class info");
// });
// app.delete("/class", (req, res) => {
//   res.send("Delete class info");
// });

app
  .route("class")
  .get((req, res) => {
    res.send("Retrieve class info");
  })
  .post((req, res) => {
    res.send("Create class info");
  })
  .put((req, res) => {
    res.send("Update class info");
  })
  .delete((req, res) => {
    res.send("Delete class info");
  });

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
