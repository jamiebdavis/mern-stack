const express = require("express");
const monogoose = require("mongoose");
const bodyParser = require("body-parser");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();
//DB config
const db = require("./config/keys").mongoURI;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

monogoose
  .connect(
    "mongodb://jamiebdavis:linkin1@ds237373.mlab.com:37373/dev-connector",
    { useNewUrlParser: true }
  )
  .then(() => console.log("mongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("hello world yt");
});

//use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`Sever running on port ${port}`);
});
