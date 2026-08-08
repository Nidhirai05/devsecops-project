import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import AddressForm from "../components/checkout/AddressForm";
import PaymentMethod from "../components/checkout/PaymentMethod";
import OrderSummary from "../components/checkout/OrderSummary";

import { useCart } from "../context/CartContext";

import "./CheckoutPage.css";

function CheckoutPage() {

    const navigate = useNavigate();

    const { cartItems, clearCart } = useCart();

    const [paymentMethod, setPaymentMethod] = useState("cod");

    const [address, setAddress] = useState({

        name: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        state: "",
        pincode: ""

    });

    const handlePlaceOrder = () => {

        if (

            !address.name ||
            !address.phone ||
            !address.email ||
            !address.address ||
            !address.city ||
            !address.state ||
            !address.pincode

        ) {

            alert("Please fill all shipping details.");

            return;

        }

        clearCart();

        navigate("/order-success");

    };

    return (

        <>

            <Navbar />

            <div className="checkout-page">

                <div className="container">

                    <h2 className="checkout-title">

                        Checkout

                    </h2>

                    <div className="row">

                        <div className="col-lg-8">

                            <AddressForm

                                address={address}

                                setAddress={setAddress}

                            />

                            <PaymentMethod

                                paymentMethod={paymentMethod}

                                setPaymentMethod={setPaymentMethod}

                            />

                        </div>

                        <div className="col-lg-4">

                            <OrderSummary

                                cartItems={cartItems}

                                onPlaceOrder={handlePlaceOrder}

                            />

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default CheckoutPage;