require('dotenv').config();
const express = require('express');
const connectDb = require("./config/db");

const app = express();
connectDb();

app.use(express.json());

const catchphrasesRouter = require('./routes/catchphrases');
app.use('/catchphrases', catchphrasesRouter)

app.listen(process.env.PORT || 3000, () => console.log('Daar vat hy!!!'));
