const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let posts = [];

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/posts", (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: "Write something!" });
  }

  posts.unshift(text);
  res.json({ message: "Post added successfully" });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});