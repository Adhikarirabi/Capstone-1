import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#fce883",
      },
      "::placeholder": {
        color: "#87bbfd",
      },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
  };

  return (
    <form className="checkoutForm" onSubmit={handleSubmit}>
      <CardElement options={CARD_OPTIONS} />
      <button type="submit" className="submitBtn" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

const stripePromise = loadStripe(
  "pk_test_51IKbS0FYHZQ6SaKTXhmvFtOXkdDRzTS3urzQBLjgJ7YWXROMYwDGYvUSv5QdI0UtIFg2q7iXIhh1XlBUDbdiKsqL003mOtXgZr"
);

export default function Checkout() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}
