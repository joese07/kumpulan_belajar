const express = require("express");
const morgan = require("morgan");

const adminRouter = require("./admin");

const app = express();
const port = 8080;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hi Mom!");
});

app.get("/product", (req, res) => {
  res.json(["Macbook Pro", "Asus Vivobook", "Lenovo Yoga"]);
});

app.get("/order", (req, res) => {
  res.json([
    { id: 1, paid: true, userId: 1 },
    { id: 2, paid: false, userId: 1 },
    { id: 3, paid: false, userId: 2 },
  ]);
});

app.use(adminRouter);

app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    status: "failed",
    message: err.message,
  });
});

app.use((req, res, next) => {
  res.status(404).json({
    status: "failed",
    message: "Aku tersesat dan tak tau arah jalan pulang",
  });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
