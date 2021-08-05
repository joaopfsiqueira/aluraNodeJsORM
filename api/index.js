const express = require('express');
const routes = require('./routes');

const app = express();
const port = 3000; //default port to listen

routes(app)

app.listen(port, () => console.log(`O servidor esta rodando na porta ${port}`));

module.exports = app;