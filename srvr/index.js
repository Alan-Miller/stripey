const express = require('express'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      stripeKeyPublishable = process.env.PUBLISHABLE_KEY,
      stripeKeySecret = process.env.SECRET_KEY,
      {port} = require('../config'),
      app = express(),
      stripe = require('stripe')(stripeKeySecret);

app.use(bodyParser.json());
app.use(cors());

//————————————————————————————————————————————>> Stripe
app.get('/stripeKeyPub', (req, res) => {
  res.status(200).send({stripeKeyPublishable});
});

app.get('/stripe', (req, res) => {
  res.status(200).send({stripeKeyPublishable});
})

app.post('/stripe', (req, res) => {
  console.log('req.body', req.body)
  stripe.charges.create(req.body, res => {
    return (stripeErr, stripeRes) => {
      if (stripeErr) res.status(500).send({ error: stripeErr });
      else res.status(200).send({ success: stripeRes });
    }
  });
});


// app.get('/', (req, res) => {
//   res.render('index.pug', {stripeKeyPublishable});
// });

// app.post('/charge', (req, res) => {
//   let amount = 500;

//   stripe.customers.create({
//     email: req.body.stripeEmail,
//     source: req.body.stripeToken
//   })
//   .then(customer => {
//     stripe.charges.create({
//       amount, 
//       description: 'sample charge',
//       currency: 'usd',
//       customer: customer.id
//     })
//   })
//   .then(charge => res.render('charge.pug'));
// })

app.listen( _ => {
  console.log(`Listening on ${port}.`)
});