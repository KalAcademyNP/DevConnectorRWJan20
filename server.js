const express = require("express");
const mongoose = require("mongoose");
const users = require('./routes/api/users')
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const app = express();

//Db Config
const db = require("./config/keys").mongoURI;
//Connect to mongodb
mongoose
  .connect(db)
  .then(() => console.log("MongoDb connected!"))
  .catch(err => console.log(err));

//First route
app.get("/", (req, res) => res.send("Hello"));

//Use routes
app.use('/api/users', users)
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = 5555;
app.listen(port, () => console.log(`Server running on port ${port}`));
