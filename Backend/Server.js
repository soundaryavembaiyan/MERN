// run - npm start, npm i -g nodemon
const express = require('express');
require('dotenv').config(); //express

const mongoose = require("mongoose"); //connect mongoose

const app = express();
const taskRoutes = require("./routes/taskRoute");

//Middleware
app.get('/', (req, res, next) => {
  console.log("path" + req.path + "method" + req.method)
  next()
})

app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World') //visual o/p
// })

//DB connection
mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT, () => {
    console.log("DB connected successfully & listening to " + process.env.PORT) //port listening
  })
}).catch((error)=>console.log(error)) //

app.use("/api/tasks", taskRoutes)

