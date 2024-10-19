const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config();
const PORT = process.env.PORT

const app = express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}))

const routes = require('./routes')

app.use('/posts', routes)

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`.cyan.underline);
})