const { request } = require('express')
const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')

const {
    DB_USER,
    DB_PASS,
    DB_NAME,
    DB_HOST,
    PORT
} = process.env

<<<<<<< HEAD
const url = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB is connected');
    })
    .catch((err) => {
        console.log('Error on connecting to MongoDB', err);
    });
=======
mongoose.connect('mongodb://localhost', {useNewUongrlParser: true, useUnifiedTopology: true})
>>>>>>> Added database using mongoose

const app = express()

app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
