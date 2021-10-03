const express = require('express')
const conn = require('./db/Database')
const router = require('./routes/route');


const app = express()

conn;
app.use(express.json());
app.use(router);


const port = 5000 || process.env.PORT;


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`App listening on port port!`))
