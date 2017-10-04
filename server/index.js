const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , config = require('config.js')


const app = express()
const port = config.port;

app.use(bodyParser.json())
app.use(cors())

app.listen(port, _=>console.log(`${new Date()}- Listening on port: ${port}`))