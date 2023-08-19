require('dotenv').config()

const express = require('express');
const { json } = require('express');
const { connect } = require('mongoose');
const patientRoutes = require('./routes/patients');

// express
const app = express()

var cors = require("cors");
app.use(
    cors({
        origin: true,
        credentials: true,
    })
);

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/patients', patientRoutes)

// connect to db
connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('connected to db and listening on port 4000')
    })
})
.catch((error) => {
    console.log(error)
})