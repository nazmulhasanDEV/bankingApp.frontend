/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { ArrowRight } from "react-feather";
import { NavLink } from "react-router-dom";

const WarningPage = () => {
  return (
    <div className="bg-white warning-page p-8 overflow-hidden overflow-y-scroll">
      <div className="max-w-2xl mx-auto">
        <p className="text-gray-800 font-semibold text-3xl mb-6">
          Latest Scams And Warnings
        </p>

        <div className="mb-8">
          <p className="text-gray-800 font-semibold text-xl mb-2">
            Remote Access Scam
          </p>
          <ul className=" pl-5 mb-4">
            <li>
              Receiving a call from someone advising they have detected internet
              or performance issues with your computer or modem.
            </li>
            <li>
              The caller asking you to buy a piece of software or a service to
              ‘fix’ your computer.
            </li>
            <li>
              Caller asking you for personal details and/or banking or credit
              card details.
            </li>
            <li>They may then ask for some or all of the following:</li>
            <ul className=" pl-5">
              <li>Remote access to your computer.</li>
              <li>You to log into your internet banking.</li>
              <li>A need to refund your account.</li>
              <li>You to return the refund that was 'overpaid'.</li>
            </ul>
          </ul>
          <p className="font-semibold mb-2">
            How to protect yourself from a remote access scam:
          </p>
          <ul className=" pl-5 mb-4">
            <li>
              If you receive a phone call out of the blue about your computer or
              internet service and remote access is requested – hang up – even
              if they mention a credible company. If in doubt, call your
              internet service provider back on a trusted phone number.
            </li>
            <li>
              Never give an unsolicited caller remote access to your computer or
              mobile device.
            </li>
            <li>
              Never give your personal, credit card, or online account details
              over the phone unless you made the call and the phone number came
              from a trusted source.
            </li>
            <li>
              Make sure your computer is protected with regular updates,
              anti-virus/anti-malware software, and a firewall.
            </li>
            <li>
              Research software first and only purchase software from a source
              that you know and trust.
            </li>
            <li>
              If you have fallen victim to a scam or you receive a lot of
              unsolicited emails and phone calls consider changing your email
              address and phone numbers.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <p className="text-gray-800 font-semibold text-xl mb-2">Phishing</p>
          <ul className=" pl-5 mb-4">
            <li>
              A phishing scam is a fraudulent attempt to obtain sensitive
              information or data from you such as bank account numbers,
              passwords, and credit card numbers.
            </li>
            <li>
              You may be contacted by email, social media, phone call, or text
              message.
            </li>
            <li>Warning signs:</li>
            <ul className=" pl-5">
              <li>
                The message is sent from a public email domain. Legitimate
                organisations will typically not send you emails from a free
                webmail service.
              </li>
              <li>The domain name is misspelt.</li>
              <li>The email is poorly written.</li>
              <li>It includes suspicious attachments or links.</li>
              <li>The message creates a sense of urgency.</li>
              <li>
                The messages ask you to log into your Internet Banking account.
              </li>
            </ul>
          </ul>
          <p className="font-semibold mb-2">How to protect yourself:</p>
          <ul className=" pl-5 mb-4">
            <li>Be cautious and validate all communications you receive.</li>
            <li>
              Do not click on any links listed in the correspondence and do not
              open any attachments.
            </li>
            <li>Do not enter personal information in a pop-up screen.</li>
            <li>Do not respond to the message.</li>
            <li>
              Install a phishing filter on your email application and also on
              your web browser.
            </li>
            <li>
              If you receive a link posing to be from BOQ, report it to us
              immediately via{" "}
              <a
                href="mailto:financialcrimes@boq.com.au"
                className="text-blue-500"
              >
                financialcrimes@boq.com.au
              </a>
              .
            </li>
            <li>
              Delete the message, ensuring to take a screenshot if you need to
              report the URL to BOQ.
            </li>
            <div className="flex justify-between w-[60rem]">
              <li>
                Always access Internet Banking via{" "}
                <a href="https://www.boq.com.au" className="text-blue-500">
                  www.boq.com.au
                </a>{" "}
                or the BOQ mobile app.
              </li>

              <div className="flex gap-5 items-center">
                <div className="flex items-center space-x-3 mb-4">
                  <input
                    type="checkbox"
                    className="border-gray-300 rounded h-5 w-5"
                  />
                  <p className="text-xs text-gray-500 leading-4">
                    Don't show this message again
                  </p>
                </div>

                <NavLink to="/login">
                  <button className="bg-blue-500 text-white px-4 py-2 h-10 flex items-center rounded-md mb-4">
                    Continue <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </NavLink>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WarningPage;
