const express = require('express');
const router = express.Router();
const jokeController = require('../controllers/jokeController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Joke:
 *       type: object
 *       required:
 *         - text
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the joke
 *         text:
 *           type: string
 *           description: The content of the joke
 *       example:
 *         id: 1
 *         text: "Why don't scientists trust atoms? Because they make up everything!"
 */

/**
 * @swagger
 * tags:
 *   name: Jokes
 *   description: The jokes managing API
 */

/**
 * @swagger
 * /jokes:
 *   post:
 *     summary: Add a new joke
 *     tags: [Jokes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Joke'
 *     responses:
 *       201:
 *         description: The joke was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       500:
 *         description: Some server error
 */
router.post('/', jokeController.addJoke);

/**
 * @swagger
 * /jokes:
 *   get:
 *     summary: Retrieve all jokes
 *     tags: [Jokes]
 *     responses:
 *       200:
 *         description: A list of jokes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Joke'
 *       500:
 *         description: Some server error
 */
router.get('/', jokeController.getAllJokes);


/**
 * @swagger
 * /jokes/random:
 *   get:
 *     summary: Retrieve a random joke
 *     tags: [Jokes]
 *     responses:
 *       200:
 *         description: A random joke
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       500:
 *         description: Some server error
 */
router.get('/random', jokeController.getRandomJoke);

/**
 * @swagger
 * /jokes/{id}:
 *   get:
 *     summary: Retrieve a joke by ID
 *     tags: [Jokes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the joke
 *     responses:
 *       200:
 *         description: The joke description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       404:
 *         description: Joke not found
 *       500:
 *         description: Some server error
 */
router.get('/:id', jokeController.getJokeById);

module.exports = router;
