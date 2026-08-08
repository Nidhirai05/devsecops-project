import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import EmptyCart from "../components/cart/EmptyCart";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";

import { useCart } from "../context/CartContext";

import "./CartPage.css";

function CartPage() {

    const {

        cartItems,

        increaseQuantity,
        decreaseQuantity,

        removeFromCart

    } = useCart();

    return (

        <>

            <Navbar />

            <div className="cart-page">

                <div className="container">

                    <div className="cart-header">

                        <h1>Shopping Cart</h1>

                        <p>

                            Review your selected products before checkout.

                        </p>

                    </div>

                    {

                        cartItems.length === 0 ?

                            (

                                <EmptyCart />

                            )

                            :

                            (

                                <div className="row">

                                    {/* Left Side */}

                                    <div className="col-lg-8">

                                        {

                                            cartItems.map(item => (

                                                <CartItem

                                                    key={item.id}

                                                    item={item}

                                                    increaseQuantity={increaseQuantity}

                                                    decreaseQuantity={decreaseQuantity}

                                                    removeFromCart={removeFromCart}

                                                />

                                            ))

                                        }

                                    </div>

                                    {/* Right Side */}

                                    <div className="col-lg-4">

                                        <CartSummary

                                            cartItems={cartItems}

                                        />

                                    </div>

                                </div>

                            )

                    }

                </div>

            </div>

            <Footer />

        </>

    );

}

export default CartPage;