import { Link, useParams } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import { orders } from "../data/orders";

import OrderItems from "../components/orders/OrderItems";
import OrderSummary from "../components/orders/OrderSummary";

import "./OrderDetails.css";

function OrderDetails() {

    const { id } = useParams();

    const order = orders.find(

        item => item.id === id

    );

    if (!order) {

        return (

            <>

                <Navbar />

                <div className="container py-5 text-center">

                    <h2>

                        Order Not Found

                    </h2>

                    <Link

                        to="/orders"

                        className="btn btn-primary mt-3"

                    >

                        Back to Orders

                    </Link>

                </div>

                <Footer />

            </>

        );

    }

    return (

        <>

            <Navbar />

            <div className="order-details-page">

                <div className="container">

                    {/* Breadcrumb */}

                    <div className="breadcrumb-custom">

                        <Link to="/">

                            Home

                        </Link>

                        <span> / </span>

                        <Link to="/orders">

                            My Orders

                        </Link>

                        <span> / </span>

                        <span>{order.id}</span>

                    </div>

                    <div className="order-header">

                        <div>

                            <h2>

                                Order #{order.id}

                            </h2>

                            <p>

                                Ordered on {order.orderDate}

                            </p>

                        </div>

                        <span className={`status ${order.status.toLowerCase()}`}>

                            {order.status}

                        </span>

                    </div>

                    <div className="row mt-4">

                        <div className="col-lg-8">

                            <OrderItems

                                products={order.products}

                            />

                        </div>

                        <div className="col-lg-4">

                            <OrderSummary

                                order={order}

                            />

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default OrderDetails;