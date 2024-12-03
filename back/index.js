// imports::
const express = require("express");
require("dotenv").config();
const cors = require('cors')
const mongoose = require("mongoose");
const app = express();
const productroutes = require('./routes/productRoutes')
// parsing midlwear:
app.use(express.json())
app.use(cors())

// routes :
app.use("/product", productroutes);

// server init::
const port = process.env.PORT || 5000
app.listen(port , ()=> console.log(`server running on port ${port}`))

// connexion to data base :::
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Connected to database!"))
  .catch((err) => console.error("Error connecting to database:", err));