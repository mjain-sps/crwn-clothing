import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeComponent = ({ price }) => {
  const priceForStripe = price * 100;
  const pubKey =
    "pk_test_51IqBxUSIP2KwrvTfZ062DMERARuz4QUwO6cEfZFdmjj42EW666OxAaxr6MJJzNb8KQJhhQwVeXjRjL9d0r7qfrcS00xqKhDbx3";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crwn-Clothing Pvt Ltd."
      description={`Your Total is ${price}`}
      billingAddress
      shippingAddress
      image="https://sendeyo.com/en/f3eb2117da"
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
    />
  );
};

export default StripeComponent;
