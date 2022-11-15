const express = require('express');
const app = express();
const userRoute = express.Router();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile("landing/index.html", { root: "src/pages" });
});

app.get('/signup', (req, res) => {
  res.sendFile("signup/index.html", { root: "src/pages" })
});

app.get('/login', (req, res) => {
  res.sendFile("login/index.html", { root: "src/pages" });
});

userRoute.get("/", (req, res) => {
  res.sendFile("home/index.html", { root: "src/pages/user" });
});

userRoute.get("/profile", (req, res) => {
  res.sendFile("profile/index.html", { root: "src/pages/user" });
});

userRoute.get("/create", (req, res) => {
  res.sendFile("create/index.html", { root: "src/pages/user" });
});

app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`listen port on localhost:${port}`);
});
