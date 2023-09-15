const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const port = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const db = fs.readFileSync(path.resolve(__dirname, "db.json"));
const data = JSON.parse(db);

app.get("/api", (req, res) => {
  return res.status(200).json({ data: "hello world" });
});

app.get("/api/level1", (req, res) => {
  return res.status(200).json({ data: data.level1 });
});

app.get("/api/level2", (req, res) => {
  return res.status(200).json({ data: data.level2 });
});

app.get("/api/level3", (req, res) => {
  return res.status(200).json({ data: data.level3 });
});

app.get("/api/level4", (req, res) => {
  return res.status(200).json({ data: data.level4 });
});

app.get("/api/level5", (req, res) => {
  return res.status(200).json({ data: data.level5 });
});

app.listen(port, () => {
  console.log(`Server run on port ${port}`);
});
