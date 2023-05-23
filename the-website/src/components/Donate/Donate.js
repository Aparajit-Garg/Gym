import React, {useEffect, useState} from 'react';
import classes from "./Donate.module.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from 'react-router-dom';


const Donate = () => {

    const [orderId, setOrderID] = useState();
    const navigate = useNavigate();

    useEffect(()=>console.log(process.env.REACT_APP_PAYPAL_CLIENT_ID))

    // creates a paypal order
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: "Sunflower",
                    amount: {
                        currency_code: "USD",
                        value: 1,
                    },
                },
            ],
        }).then((orderID) => {
                setOrderID(orderID);
                return orderID;
        }).catch((error)=>{
            alert("Got an error: ", error);
        })
    };

    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            // setSuccess(true);
            console.log("Successful");
            navigate("/");
        })
    };

    return (
        <div className={classes.donation}>
            <div>
                <button onClick={() => navigate("/")}>Go home</button>
            </div>
            <div>
                <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
                    <PayPalButtons 
                        style={{ layout: "vertical" }}
                        createOrder={createOrder}
                        onApprove={onApprove}
                    />
                </PayPalScriptProvider>
            </div>
        </div>
    );
}

export default Donate;