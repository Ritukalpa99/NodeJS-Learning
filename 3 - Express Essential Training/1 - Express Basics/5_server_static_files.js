import express from "express";
import data from "./2_MOCK_DATA.json" assert { type: "json" };

const app = express();

const PORT = 3000;

// Using the public folder at the root of the project
app.use(express.static("public"));

// Using the images folder at the route /images
app.use("/images", express.static("images"));

app.get("/", (request, response) => {
  response.json(data);
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
  //   console.log(data);
});
