const express = require("express");

const app = express();
const port = 8080;
const users = [];

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/profile", (req, res) => {
  res.render("profile");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  users.push({
    email: email,
    password: password,
  });

  console.log(users);

  res.redirect("/tampilkan-user");
});

app.get("/jumlah-user", (req, res) => {
  res.send(`jumlah user ${users.length}`);
});

app.get("/tampilkan-user-json", (req, res) => {
  res.json(users);
});

app.get("/tampilkan-user", (req, res) => {
  res.render("data-users", {
    users,
  });
});

app.get("/greet", (req, res) => {
  const namaDariQuery = req.query.nama || "tidak ada nama";
  res.render("greet", {
    nama: namaDariQuery,
  });
});

app.listen(port, () => {
  console.log(`Listening on  http://localhost:${port}`);
});
