const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  console.log(`halaman yang dituju adalah ${req.url}`);
  next();
});

router.get("/admin/info", (req, res) => {
  res.send("Form Adin Router - info admin");
});

router.get("/admin/about", (req, res) => {
  res.send("from Admin Router - about admin");
});

module.exports = router;
