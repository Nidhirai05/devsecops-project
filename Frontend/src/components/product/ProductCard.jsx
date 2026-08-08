import { Link } from "react-router-dom";
import "./ProductCard.css";
import { useCart } from "../../context/CartContext";

function ProductCard({ product }) {

  const { addToCart } = useCart();

  // console.log(product);

  const categoryName = product.category
    .replace(/-/g, " ")
    .replace(/\b\w/g, letter => letter.toUpperCase());

  return (

    <div className="product-card">

      {/* Product Image */}

      <div className="product-image">

        <Link to={`/product/${product.id}`}>

          <img
            src={product.image}
            alt={product.name}
            className="img-fluid"
          />

        </Link>

        {product.discount > 0 && (

          <span className="discount-badge">

            {product.discount}% OFF

          </span>

        )}

        {/* Wishlist Icon */}

        <button
          type="button"
          className="wishlist-icon-btn"
          title="Add to Wishlist"
        >
          <i className="bi bi-heart"></i>
        </button>

      </div>

      <div className="product-details">

        {/* Category */}

        <p className="product-category">

          {categoryName}

        </p>

        {/* Product Name */}

        <Link
          to={`/product/${product.id}`}
          className="product-link"
        >

          <h5 className="product-name">

            {product.name}

          </h5>

        </Link>

        {/* Rating */}

        <div className="product-rating">

          <i className="bi bi-star-fill"></i>

          <span>

            {product.rating || 4.5}

          </span>

          <small>

            ({product.reviews || 120})

          </small>

        </div>

        {/* Price */}

        <div className="price-section">

          <span className="current-price">

            ₹{product.price}

          </span>

          {product.originalPrice && (

            <span className="original-price">

              ₹{product.originalPrice}

            </span>

          )}

        </div>

        {/* Button */}

        {

          product.stockQuantity > 0 ?

            (

              <button
                className="btn btn-primary w-100 mt-3"
                onClick={() => addToCart(product)}
              >

                <i className="bi bi-bag-plus me-2"></i>

                Add to Bag

              </button>

            )

            :

            (

              <button
                className="btn btn-secondary w-100 mt-3"
                disabled
              >

                Out of Stock

              </button>

            )

        }

      </div>

    </div>

  );

}

export default ProductCard;