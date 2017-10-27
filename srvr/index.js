const express = require('express'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      { PORT } = require('../config'),
      app = express();



app.listen(() => {
  console.log(`Listening on ${PORT}.`)
});