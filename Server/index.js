const express = require('express')
const mongoose = require('./db/Database')
require("dotenv").config();
const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express()

const port = process.env.PORT || 5000;
mongoose;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors());
app.use(cookieParser());
app.use("/", require("./routes/route"));
// Deployement
const __dirname1 = path.resolve();
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname1,"../client/build")));
    
    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname1,"client","build","index.html"));
    })
}else{
  app.get("/", (req, res) => res.send("Hello World!"));
}

app.listen(port, () => console.log(`App listening on port ${port}!`))



//Routes
