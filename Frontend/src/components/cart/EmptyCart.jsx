import { Link } from "react-router-dom";
import "./EmptyCart.css";

function EmptyCart() {

    return (

        <div className="empty-cart">

            <div className="empty-cart-icon">

                <i className="bi bi-cart-x"></i>

            </div>

            <h2>Your Cart is Empty</h2>

            <p>

                Looks like you haven't added any products yet.
                Start shopping and discover your perfect style.

            </p>

            <Link
                to="/products"
                className="btn shop-btn"
            >

                Continue Shopping

            </Link>

        </div>

    );

}

export default EmptyCart;