const express = require('express')
const conn = require('./db/Database')
const path = require('path')
const dotenv = require('dotenv');

const app = express()
const port = 5000 || process.env.PORT
//MongoDb connection
conn;

//For Security
dotenv.config({path:'./config/config.env'});

//BodyParser to enable req.body
app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`App listening on port ${port}!`))

//Routes
app.use('/',require('./routes/route'));