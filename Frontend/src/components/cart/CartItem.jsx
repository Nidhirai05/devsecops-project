import "./CartItem.css";

function CartItem({
    item,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
}) {

    return (

        <div className="cart-item">

            {/* Product Image */}

            <div className="cart-image">

                <img
                    src={item.image}
                    alt={item.name}
                />

            </div>

            {/* Product Details */}

            <div className="cart-details">

                <h5>{item.name}</h5>

                <p className="cart-category">

                    {item.category.replace(/-/g, " ")}

                </p>

                <p className="cart-size">

                    Size : {item.size}

                </p>

                <p className="cart-color">

                    Color : {item.color}

                </p>

                <div className="cart-price">

                    <span className="current-price">

                        ₹{item.price}

                    </span>

                    {

                        item.originalPrice &&

                        <span className="old-price">

                            ₹{item.originalPrice}

                        </span>

                    }

                </div>

            </div>

            {/* Quantity */}

            <div className="cart-actions">

                <div className="quantity-box">

                    <button
                        onClick={() => decreaseQuantity(item.id)}
                    >

                        −

                    </button>

                    <span>

                        {item.quantity}

                    </span>

                    <button
                        onClick={() => increaseQuantity(item.id)}
                    >

                        +

                    </button>

                </div>

                <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                >

                    <i className="bi bi-trash3"></i>

                    Remove

                </button>

            </div>

        </div>

    );

}

export default CartItem;