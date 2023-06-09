const express = require('express')
const dbConnection = require('./config/dbconnection')
const app = express()
const dotenv = require('dotenv').config()
const cors = require('cors')
const port = 5000

dbConnection()
app.use(express.json())
app.use(cors())
app.use('/api/forms',require('../Backend2/routes/formroutes'))



app.listen(port,()=>{
    console.log("App is listening in the Port "+port);
})
