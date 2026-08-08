import { Link } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import "./OrderSuccess.css";

function OrderSuccess() {

    return (

        <>

            <Navbar />

            <div className="order-success-page">

                <div className="container">

                    <div className="success-card">

                        <div className="success-icon">

                            <i className="bi bi-check-circle-fill"></i>

                        </div>

                        <h2>

                            Order Placed Successfully!

                        </h2>

                        <p>

                            Thank you for shopping with <strong>StyleAura</strong>.
                            Your order has been placed successfully and will be
                            processed soon.

                        </p>

                        <p className="order-id">

                            Order ID:
                            <strong>

                                #SA2026001

                            </strong>

                        </p>

                        <div className="success-buttons">
                            <Link
                                to="/orders"
                                className="btn btn-outline-primary me-3"
                            >
                                <i className="bi bi-bag-check me-2"></i>
                                View My Orders
                            </Link>

                            <Link
                                to="/products"
                                className="btn btn-primary me-3"
                            >
                                Continue Shopping
                            </Link>

                            <Link
                                to="/"
                                className="btn btn-outline-dark"
                            >
                                Back to Home
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default OrderSuccess;