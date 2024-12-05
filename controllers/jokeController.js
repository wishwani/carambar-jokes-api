const { Joke } = require('../models');

exports.addJoke = async (req, res) => {
  try {
    const joke = await Joke.create({ text: req.body.text });
    res.status(201).json(joke);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    res.status(200).json(jokes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getJokeById = async (req, res) => {
  try {
    const joke = await Joke.findByPk(req.params.id);
    joke ? res.status(200).json(joke) : res.status(404).json({ message: "Joke not found" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRandomJoke = async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.status(200).json(randomJoke);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

