import { useState } from "react";
import "./ProductInfo.css";
import { useCart } from "../../context/CartContext";

function ProductInfo({ product }) {

    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    const increaseQuantity = () => {
        if (quantity < product.stockQuantity) {
            setQuantity(quantity + 1);
        }
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (

        <div className="product-info">

            {/* Category */}

            <span className="product-category">

                {product.category
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, c => c.toUpperCase())}

            </span>

            {/* Product Name */}

            <h1 className="product-title">

                {product.name}

            </h1>

            {/* Rating */}

            <div className="rating-section">

                <span className="rating-badge">

                    ⭐ {product.rating}

                </span>

                <span className="review-count">

                    ({product.reviews} Reviews)

                </span>

            </div>

            {/* Price */}

            <div className="price-section">

                <span className="current-price">

                    ₹{product.price}

                </span>

                <span className="original-price">

                    ₹{product.originalPrice}

                </span>

                <span className="discount">

                    {product.discount}% OFF

                </span>

            </div>

            <hr />

            {/* Size */}

            <div className="info-row">

                <strong>Size</strong>

                <span>{product.size}</span>

            </div>

            {/* Color */}

            <div className="info-row">

                <strong>Color</strong>

                <span>{product.color}</span>

            </div>

            {/* Stock */}

            <div className="info-row">

                <strong>Availability</strong>

                <span className={product.stockQuantity > 0 ? "stock" : "out-stock"}>

                    {product.stockQuantity > 0
                        ? "In Stock"
                        : "Out of Stock"}

                </span>

            </div>

            <hr />

            {/* Quantity */}

            <div className="quantity-section">

                <strong>Quantity</strong>

                <div className="quantity-box">

                    <button
                        onClick={decreaseQuantity}
                    >
                        -
                    </button>

                    <span>

                        {quantity}

                    </span>

                    <button
                        onClick={increaseQuantity}
                    >
                        +
                    </button>

                </div>

            </div>

            {/* Buttons */}

            <div className="product-buttons">

                <button className="cart-btn" onClick={() => addToCart(product)}>

                    <i className="bi bi-cart-plus me-2"></i>

                    Add To Cart

                </button>

                <button className="buy-btn">

                    Buy Now

                </button>

            </div>

            {/* Wishlist */}

            <button className="wishlist-btn">

                <i className="bi bi-heart"></i>

                Add to Wishlist

            </button>

        </div>

    );

}

export default ProductInfo;