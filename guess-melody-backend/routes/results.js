const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const { readFile } = require('../helpers');

const RESULT_PATH = path.join(__dirname, '../data/results.json');

router.get('/', (req, res) => {
  readFile(RESULT_PATH)
    .then((data) => console.log(data) || res.send(data))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка сервера' }));
});

router.post('/', (req, res) => {
  readFile(RESULT_PATH)
    .then((data) => {
      const parsedResultData = JSON.parse(data);
      fs.writeFile(
        RESULT_PATH,
        JSON.stringify([...parsedResultData, req.body]),
        function (error) {
          console.log(error);
          if (error) {
            // если ошибка
            return console.log(error);
          }
          res.send();
        }
      );
    })
    .catch(() => res.status(500).send({ message: 'Произошла ошибка сервера' }));
});

module.exports = router;
