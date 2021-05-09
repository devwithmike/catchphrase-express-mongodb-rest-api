const express = require('express');
const router = express.Router();
const Catchphrase = require('../models/catchphrase');

/**
 * @swagger
 * /catchphrases:
 *   get:
 *     description: All catchphrases
 *     responses:
 *       200:
 *         description: Returns all the catachphrases
 */
router.get('/', async (req, res) => {
	try {
		const catchphrases = await Catchphrase.find({});
		res.json(catchphrases);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

/**
 * @swagger
 * /catchphrases/{id}:
 *   get:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The catchphrase ID.
 *     description: Get a catchphrase by id
 *     responses:
 *       200:
 *         description: Returns the requested catachphrase
 */
router.get('/:id', getCatchphrase, (req, res) => {
	res.json(res.catchphrase);
});

/**
 * @swagger
 * /catchphrases:
 *   post:
 *     parameters:
 *      - in: body
 *        name: catchphrase
 *        description: New catchphrase
 *        schema:
 *          type: object
 *          properties:
 *            movieName:
 *              type: string
 *            catchphrase:
 *              type: string
 *            movieContext:
 *              type: string
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/', async (req, res) => {
	const catchphrase = new Catchphrase({
		movieName: req.body.movieName,
		catchphrase: req.body.catchphrase,
		movieContext: req.body.movieContext,
	});

	try {
		const newCatchphrase = await catchphrase.save();
		res.status(201).json(newCatchphrase);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

/**
 * @swagger
 * /catchphrases/{id}:
 *   patch:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The catchphrase ID.
 *      - in: body
 *        name: catchphrase
 *        description: Update catchphrase
 *        schema:
 *          type: object
 *          properties:
 *            movieName:
 *              type: string
 *            catchphrase:
 *              type: string
 *            movieContext:
 *              type: string
 *     responses:
 *       201:
 *         description: Created
 */
router.patch('/:id', getCatchphrase, async (req, res) => {
	if (req.body.movieName != null) {
		res.catchphrase.movieName = req.body.movieName
	}
	if (req.body.catchphrase != null) {
		res.catchphrase.catchphrase = req.body.catchphrase
	}
	if (req.body.movieContext != null) {
		res.catchphrase.movieContext = req.body.movieContext
	}

	try {
		const updatedCatchphrase = await res.catchphrase.save()
		res.json(updatedCatchphrase)
	} catch (err) {
		rs.status(400).json({ message: err.message })
	}
});

/**
 * @swagger
 * /catchphrases/{id}:
 *   delete:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The catchphrase ID.
 *     description: Delete a catchphrase by id
 *     responses:
 *       200:
 *         description: Returns the requested catachphrase
 */
router.delete('/:id', getCatchphrase, async (req, res) => {
	try {
		await res.catchphrase.remove();
		res.json({ message: 'Deleted Catchphrase' });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

async function getCatchphrase(req, res, next) {
	let catchphrase;
	try {
		catchphrase = await Catchphrase.findById(req.params.id);
		if (catchphrase == null) {
			return res.status(404).json({ message: 'Cannot find catchphrase' });
		}
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}

	res.catchphrase = catchphrase;
	next();
}

module.exports = router;
