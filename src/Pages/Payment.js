import React, { useState } from "react";
import "../assets/styles/home.css";

function Payment({ name, population, region, capital }) {
  const price = 500;
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  });

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    //   console.log('hello');
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_zDBQlWA7G12nbc",
      currency: "INR",
      amount: amount * 100,
      //   order_id: "ggjgj",
      name: name.common,
      description: "Thank you",
      //   image: 'http://localhost:1337/logo.svg',
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("Payment Successfully");
      },
      prefill: {
        name: "hello",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      <h3 className="name" onClick={() => displayRazorpay(price)}>
        {name.common}
      </h3>
      <p>
        Population: <span>{population}</span>
      </p>
      <p>
        Region: <span>{region}</span>
      </p>
      <p>
        Capital: <span>{capital}</span>
      </p>
    </>
  );
}

export default Payment;
