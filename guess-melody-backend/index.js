const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const { PORT = 3001 } = process.env;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(routes);

app.listen(PORT, () => console.log('ok'));
