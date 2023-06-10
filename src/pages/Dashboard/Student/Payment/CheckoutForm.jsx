import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./Stripe.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const CheckoutForm = ({ singleClass }) => {
  const {
    classId,
    className,
    classImage,
    instructorName,
    instructorEmail,
    price,
  } = singleClass;

  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [paymentSecret, setPaymentSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [cardSuccess, setCardSuccess] = useState("");

  useEffect(() => {
    if (price && price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setPaymentSecret(res.data.clientSecret);
      });
    }
  }, [axiosSecure, price]);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
      setCardSuccess("");
      console.log("[error]", error);
    } else {
      setCardError("");
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(paymentSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    setProcessing(false);

    if (confirmError) {
      setCardError(confirmError.message);
      setCardSuccess("");
      console.log(confirmError);
    }

    if (paymentIntent.status === "succeeded") {
      setCardSuccess(paymentIntent.id);
      setCardError("");

      const paymentHistory = {
        classId,
        className,
        classImage,
        studentName: user?.displayName,
        studentEmail: user?.email,
        instructorName,
        instructorEmail,
        price,
        transactionId: paymentIntent.id,
        date: new Date(),
      };

      const enrolledClass = {
        classId,
        className,
        classImage,
        studentName: user?.displayName,
        studentEmail: user?.email,
        instructorName,
        instructorEmail,
        price,
      };

      axiosSecure
        .post("/payments", { paymentHistory, enrolledClass })
        .then((res) => {
          if (
            res.data.insertPaymentHistory.insertedId &&
            res.data.insertEnrolledClass.insertedId &&
            res.data.deleteSelectedClass.deletedCount === 1 &&
            res.data.updateSeats.modifiedCount > 0 &&
            res.data.updateInstructor.modifiedCount > 0
          ) {
            Swal.fire(
              "Payment Successful!",
              "Payment has been submitted.",
              "success"
            );
            navigate("/dashboard/payments-history", { replace: true });
          }
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-[90%] md:w-[40%] mx-auto">
      {cardError && <p className="text-error">{cardError}</p>}
      {cardSuccess && (
        <p className="text-success">
          Transaction complete with transactionId: {cardSuccess}
        </p>
      )}
      <CardElement
        className="w-full"
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-sm btn-primary text-white w-full"
        type="submit"
        disabled={!stripe || !paymentSecret || processing}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
