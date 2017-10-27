const express = require('express'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      {port} = require('../config'),
      app = express();



app.listen(() => {
  console.log(`Listening on ${port}.`)
});