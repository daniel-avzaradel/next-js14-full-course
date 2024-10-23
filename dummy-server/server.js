const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express()

dotenv.config()
const PORT = process.env.PORT

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`.cyan.underline);
})