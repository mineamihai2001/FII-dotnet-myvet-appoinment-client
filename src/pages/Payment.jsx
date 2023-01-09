import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import config from "../config/config";
import { useSearchParams } from "react-router-dom";

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

const onApprove = (data, actions, appointmentId, setResponse) => {
    return actions.order.capture().then((details) => {
        const name = details.payer.name.given_name;
        // alert(`Transaction completed by -> ${name} ${appointmentId}`);
        fetch(
            `${
                config.__server.domain + config.__server.endpoint
            }/Appointments/payment/${appointmentId}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                if (response?.isPayed) {
                    setResponse(`Payment completed. Your appointment id is #${response.id}`);
                } else {
                    setResponse("An error has occurred. Try again");
                }
            });
    });
};

const text = {
    initial: "Once the payment is complete you will receive all the details about the appointment.",
    done: "",
};

const Payment = (props) => {
    const name = "Test User";
    const [isComplete, setIsComplete] = useState(false);
    const [response, setResponse] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <>
            <div
                className="w-100 h-100 d-flex flex-column 
                            justify-content-center align-items-center"
            >
                {response ? (
                    <h3>{response}</h3>
                ) : (
                    <>
                        <h3>Hello {name}. Make the payment for your appointment here.</h3>
                        <h5>
                            Once the payment is complete you will receive all the details about the
                            appointment.
                        </h5>
                    </>
                )}
                <div className={`w-25 ${isComplete ? "d-none" : ""}`}>
                    <PayPalScriptProvider options={initialOptions}>
                        <PayPalButtons
                            style={{ layout: "horizontal" }}
                            createOrder={createOrder}
                            onApprove={(data, actions) =>
                                onApprove(data, actions, searchParams.get("id"), setResponse)
                            }
                        />
                    </PayPalScriptProvider>
                </div>
            </div>
        </>
    );
};

export default Payment;
