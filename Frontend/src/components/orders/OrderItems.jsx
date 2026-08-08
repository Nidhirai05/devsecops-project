import { Link } from "react-router-dom";

import "./OrderItems.css";

function OrderItems({ products }) {

    return (

        <div className="order-items">

            <h4>

                Ordered Products

            </h4>

            {

                products.map(product => (

                    <div

                        key={product.id}

                        className="order-item"

                    >

                        <div className="item-image">

                            <img

                                src={product.image}

                                alt={product.name}

                            />

                        </div>

                        <div className="item-details">

                            <Link

                                to={`/product/${product.id}`}

                                className="product-link"

                            >

                                <h5>

                                    {product.name}

                                </h5>

                            </Link>

                            <p>

                                Size : {product.size}

                            </p>

                            <p>

                                Color : {product.color}

                            </p>

                            <p>

                                Quantity : {product.quantity}

                            </p>

                        </div>

                        <div className="item-price">

                            <h5>

                                ₹{product.price}

                            </h5>

                            <small>

                                Total

                            </small>

                            <h6>

                                ₹{product.price * product.quantity}

                            </h6>

                        </div>

                    </div>

                ))

            }

        </div>

    );

}

export default OrderItems;