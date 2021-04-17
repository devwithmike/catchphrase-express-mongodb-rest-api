const mongoose = require("mongoose");
const  Schema  = mongoose.Schema;

const catchphraseSchema = new Schema({
	movieName: {
		type: String,
	},
	catchphrase: {
		type: String,
	},
	movieContext: {
		type: String,
	},
});

const Catchphrase = mongoose.model('Catchphrase', catchphraseSchema);

module.exports = Catchphrase;
