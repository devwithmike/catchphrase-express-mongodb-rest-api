require('dotenv').config();
const express = require('express');
const connectDb = require("./config/db");
const { catchphrases } = require("./routes/index");
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
connectDb();

app.use(express.json());

app.use(express.static('public'));

const swaggerOptions = {
	swaggerDefinition: {
		info: {
			title: 'REST API',
			description: "REST API INFO"
		},
	},
	apis: ["./routes/catchphrases.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/catchphrases', catchphrases)

app.listen(process.env.PORT || 3000, () => console.log('Daar vat hy!!!'));
