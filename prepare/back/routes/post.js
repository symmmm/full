const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  // POST/post
  res.json("작성완료");
});

router.delete("/", (req, res) => {
  //DELETE /post
  res.json("삭제완료");
});
module.exports = router;
