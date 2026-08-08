import "./OrderSummary.css";

function OrderSummary({ order }) {

    return (

        <div className="order-summary">

            {/* Delivery Address */}

            <div className="summary-card">

                <h4>

                    Delivery Address

                </h4>

                <p>

                    <strong>

                        {order.shippingAddress.name}

                    </strong>

                </p>

                <p>

                    {order.shippingAddress.phone}

                </p>

                <p>

                    {order.shippingAddress.address}

                </p>

                <p>

                    {order.shippingAddress.pincode}

                </p>

            </div>

            {/* Payment */}

            <div className="summary-card">

                <h4>

                    Payment Details

                </h4>

                <div className="summary-row">

                    <span>

                        Method

                    </span>

                    <span>

                        {order.paymentMethod}

                    </span>

                </div>

                <div className="summary-row">

                    <span>

                        Status

                    </span>

                    <span

                        className={

                            order.paymentStatus === "Paid"

                                ?

                                "paid"

                                :

                                "pending"

                        }

                    >

                        {order.paymentStatus}

                    </span>

                </div>

            </div>

            {/* Price */}

            <div className="summary-card">

                <h4>

                    Price Details

                </h4>

                <div className="summary-row">

                    <span>

                        Subtotal

                    </span>

                    <span>

                        ₹{order.subtotal}

                    </span>

                </div>

                <div className="summary-row">

                    <span>

                        Delivery

                    </span>

                    <span>

                        {

                            order.deliveryCharge === 0

                                ?

                                "FREE"

                                :

                                `₹${order.deliveryCharge}`

                        }

                    </span>

                </div>

                <hr />

                <div className="summary-row total">

                    <span>

                        Total

                    </span>

                    <span>

                        ₹{order.total}

                    </span>

                </div>

            </div>

        </div>

    );

}

export default OrderSummary;