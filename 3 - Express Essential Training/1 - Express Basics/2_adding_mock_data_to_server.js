import express from "express";
import data from "./2_MOCK_DATA.json" assert { type: "json" };

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
  console.log(data);
});
