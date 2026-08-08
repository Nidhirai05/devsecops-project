import "./OrderSummary.css";

function OrderSummary({

    cartItems,
    onPlaceOrder

}) {

    const subtotal = cartItems.reduce(

        (total, item) =>

            total + (item.price * item.quantity),

        0

    );

    const originalTotal = cartItems.reduce(

        (total, item) =>

            total + ((item.originalPrice || item.price) * item.quantity),

        0

    );

    const discount = originalTotal - subtotal;

    const deliveryCharge = subtotal >= 999 ? 0 : 99;

    const total = subtotal + deliveryCharge;

    return (

        <div className="checkout-summary">

            <h4>

                Order Summary

            </h4>

            <hr />

            {

                cartItems.map(item => (

                    <div
                        className="summary-product"
                        key={item.id}
                    >

                        <span>

                            {item.name}

                            <small>

                                × {item.quantity}

                            </small>

                        </span>

                        <span>

                            ₹{item.price * item.quantity}

                        </span>

                    </div>

                ))

            }

            <hr />

            <div className="summary-row">

                <span>

                    Subtotal

                </span>

                <span>

                    ₹{originalTotal}

                </span>

            </div>

            <div className="summary-row">

                <span>

                    Discount

                </span>

                <span className="discount">

                    -₹{discount}

                </span>

            </div>

            <div className="summary-row">

                <span>

                    Delivery

                </span>

                <span>

                    {

                        deliveryCharge === 0

                            ?

                            "FREE"

                            :

                            `₹${deliveryCharge}`

                    }

                </span>

            </div>

            <hr />

            <div className="summary-row total">

                <span>

                    Total Amount

                </span>

                <span>

                    ₹{total}

                </span>

            </div>

            <button

                className="place-order-btn"

                onClick={onPlaceOrder}

            >

                Place Order

            </button>

        </div>

    );

}

export default OrderSummary;