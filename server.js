require('dotenv').config();
const express = require('express');
const connectDb = require("./config/db");
const { docs, catchphrases } = require("./routes/index");

const app = express();
connectDb();

app.use(express.json());

app.use(express.static('public'));

app.use('/', docs);
app.use('/catchphrases', catchphrases)

app.listen(process.env.PORT || 3000, () => console.log('Daar vat hy!!!'));
