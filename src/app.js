const express = require("express");
const cors = require("cors");
const errorHandler = require("@/middlewares/errorHandler")
const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
  }));
const testRoutes = require('./routes/test');
const usersRoutes = require('./routes/users'); // Import the entire /users route group
app.use((req,res,next)=> {
  console.log("req.headers: ",req.headers)
  next()
})
app.use('/test', testRoutes);
app.use('/users', usersRoutes); // Mount users routes at /users
app.use(errorHandler);
module.exports = app;
