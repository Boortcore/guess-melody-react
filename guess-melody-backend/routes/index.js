const router = require('express').Router();

const answersRouter = require('./answers');
const resultsRouter = require('./results');

router.use('/answers', answersRouter);
router.use('/results', resultsRouter);
router.use((_, res) => {
  res
    .status(404)
    .send({ message: 'Страница по указанному маршруту не найдена' });
});

module.exports = router;
