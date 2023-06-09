import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK_KEY);

const Payment = () => {
  const { id } = useParams();
  const [axiosSecure] = useAxiosSecure();
  const [singleClass, setSingleClass] = useState();

  useEffect(() => {
    axiosSecure.get(`/selected-class/${id}`).then((res) => {
      setSingleClass(res.data);
    });
  }, [id, axiosSecure]);

  if (!singleClass) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="w-full md:w-[80%] mx-auto my-8">
      <h3 className="text-3xl uppercase text-center">Payment</h3>
      <Elements stripe={stripePromise}>
        <CheckoutForm singleClass={singleClass} />
      </Elements>
    </div>
  );
};

export default Payment;
