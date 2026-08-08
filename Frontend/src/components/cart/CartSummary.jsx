import "./CartSummary.css";
import { useNavigate } from "react-router-dom";

function CartSummary({ cartItems }) {

    const navigate = useNavigate();

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

    const deliveryCharge = subtotal > 999 ? 0 : 99;

    const total = subtotal + deliveryCharge;

    return (

        <div className="cart-summary">

            <h4>Price Details</h4>

            <hr />

            <div className="summary-row">

                <span>

                    Price ({cartItems.length} Items)

                </span>

                <span>

                    ₹{originalTotal}

                </span>

            </div>

            <div className="summary-row">

                <span>Discount</span>

                <span className="discount">

                    -₹{discount}

                </span>

            </div>

            <div className="summary-row">

                <span>Delivery Charges</span>

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

                <span>Total Amount</span>

                <span>

                    ₹{total}

                </span>

            </div>

           

            <button

                className="checkout-btn"

                onClick={() => navigate("/checkout")}

            >

                Proceed to Checkout

            </button>

        </div>

    );

}

export default CartSummary;