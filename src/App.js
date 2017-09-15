import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import './styles/main.css';

class App extends Component {

  onToken(amt, desc, checkoutCB) {
    return (token => {
      axios.post(`http://localhost:3121/stripe`,
      {
        desc,
        source: token.id,
        currency: 'USD',
        amt: amt
      })
      .then(res => checkoutCB());
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Stripe</h2>
        </div>

        <StripeCheckout 
          name="Stripey"
          description="Where's my money?"
          amount={999}
          token={this.onToken(999, "Where's my money?")}
          currency="USD"
          stripeKey="pk_test_hnF7JyUZM8nhb8nk1YSaJpuQ"
        />

      </div>
    );
  }
}

export default App;


{/* <form action="/charge" method="POST">
  <script>
    src="https://checkout.stripe.com/checkout.js" 
    class="stripe-button"
    data-key="pk_test_hnF7JyUZM8nhb8nk1YSaJpuQ"
    data-amount="999"
    data-name="Stripey"
    data-description="I do not know"
    data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
    data-locale="auto"
    data-zip-code="true"
  </script>
</form> */}