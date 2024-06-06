const router = require('express').Router();
const path = require('path');
const { readFile } = require('../helpers');

const CARDS_PATH = path.join(__dirname, '../data/answers.json');

router.get('/', (req, res) => {
  readFile(CARDS_PATH)
    .then((answers) => res.send(answers))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка сервера' }));
});

module.exports = router;
