import React from "react";

const FeatureCardComponents = () => {
  const FeatureCard = ({ title, description }) => {
    return (
      <div className="w-[10rem] mx-16 my-8 bg-white">
        <h3 className="text-xl font-semibold my-2">{title}</h3>
        <p className="text-gray-700 font-thin">{description}</p>
      </div>
    );
  };
  const features = [
    {
      title: "View your account",
      description:
        "See your balances and transaction history along with pending payments and received BPAY View® bills",
    },
    {
      title: "Move money",
      description:
        "Transfer funds between your accounts, make a payment to a 3rd party account or pay a bill with BPAY.",
    },
    {
      title: "Locate us",
      description:
        "Find a BOQ branch or ATM based on your current location or suburb/postcode.",
    },
    {
      title: "Call BOQ",
      description:
        "Need to talk to us? No need to search for our number - you can call us directly from the BOQ Mobile app.",
    },
    {
      title: "Calculators",
      description:
        "BOQ Mobile gives you access to all our calculators, including Lending, Savings and Income Tax calculators. ",
    },
    {
      title: "Personalisation",
      description:
        "Customise BOQ Mobile for how you want to use it. Choose the top feature, how the app looks & your local branch.",
    },
  ];

  return (
    <div className="parent-grid">
      <div className="div1">
        <p>View your account</p>
        <p className="font-thin">
          See your balances and transaction history along with pending payments
          and received BPAY View® bills
        </p>
      </div>
      <div className="div2">
        <p>Move money</p>
        <p className="font-thin">
          See your balances and transaction history along with pending payments
          and received BPAY View® bills
        </p>
      </div>
      <div className="div3">
        <p>Locate us</p>
        <p className="font-thin">
          See your balances and transaction history along with pending payments
          and received BPAY View® bills
        </p>
      </div>
      <div className="div4">
        <p>Call BOQ</p>
        <p className="font-thin">
          See your balances and transaction history along with pending payments
          and received BPAY View® bills
        </p>
      </div>
      <div className="div5">
        <p>Personalisation</p>
        <p className="font-thin">
          See your balances and transaction history along with pending payments
          and received BPAY View® bills
        </p>
      </div>
      <div className="div6">
        <p>Calculators</p>
        <p className="font-thin">
          See your balances and transaction history along with pending payments
          and received BPAY View® bills
        </p>
      </div>
    </div>
  );
};

export default FeatureCardComponents;
