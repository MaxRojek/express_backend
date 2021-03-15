import bodyParser from 'body-parser';

import express from 'express'
const mongoose = require("mongoose");
const app = express();
const postsRoute = require('./routes/posts')


require("dotenv").config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true,useUnifiedTopology: true },()=>
console.log("Connected to db")
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/posts', postsRoute);

app.get("/", (req, res) => {
  res.send("Hello" );
});

app.listen(3000,()=>console.log('Server running'));