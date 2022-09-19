const express = require('express')
const mongoose = require('./db/Database')
require("dotenv").config();
const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const app = express()

let port = process.env.PORT || 5000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors());
app.use(cookieParser());
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`App listening on port ${port}!`))

if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}
  //Routes
  app.use("/", require("./routes/route"));