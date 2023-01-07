import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import config from "../config/config";

const initialOptions = {
    "client-id": "AQxZpUhuxET6S-vhhTy5X0o_8-__XbFH32nMAGwaw6I8-4WK-ePShnHndnZfzzUqMdYG0yW96JB34mI7",
    currency: "EUR",
};

const createOrder = (data, actions) => {
    return actions.order.create({
        purchase_units: [
            {
                amount: {
                    value: config.billing.appointment_price,
                },
            },
        ],
    });
};

const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
        const name = details.payer.name.given_name;
        // TODO: approve appointment when done
        alert(`Transaction completed by ${name}`);
    });
};

const Payment = (props) => {
    const name = "Test User";
    const [isComplete, setIsComplete] = useState(false);

    return (
        <>
            <div
                className="w-100 h-100 d-flex flex-column 
                            justify-content-center align-items-center"
            >
                <h3>Hello {name}. Make the payment for your appointment here.</h3>
                <h5>
                    Once the payment is complete you will receive all the details about the
                    appointment.
                </h5>
                <div className={`w-25 ${isComplete ? "d-none" : ""}`}>
                    <PayPalScriptProvider options={initialOptions}>
                        <PayPalButtons
                            style={{ layout: "horizontal" }}
                            createOrder={createOrder}
                            onApprove={onApprove}
                        />
                    </PayPalScriptProvider>
                </div>
            </div>
        </>
    );
};

export default Payment;
