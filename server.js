require('dotenv').config();
const express = require('express');
const connectDb = require("./config/db");
const { catchphrases } = require("./routes/index");
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
connectDb();

app.use(express.json());

const swaggerOptions = {
	swaggerDefinition: {
		info: {
			title: 'Catchphrases REST API',
			description: "A REST API built with Express and MongoDB. This API provides movie catchphrases and the context of the catchphrase in the movie."
		},
	},
	apis: ["./routes/catchphrases.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/catchphrases', catchphrases)
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.listen(process.env.PORT || 5000, () => console.log('Daar vat hy!!!'));
