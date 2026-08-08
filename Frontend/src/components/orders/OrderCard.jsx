import { Link } from "react-router-dom";
import "./OrderCard.css";

function OrderCard({ order }) {

    return (

        <div className="order-card">

            {/* Product Image */}

            <div className="order-image">

                <img

                    src={order.image}

                    alt="Product"

                />

            </div>

            {/* Order Details */}

            <div className="order-details">

                <h5>

                    Order #{order.id}

                </h5>

                <p>

                    Ordered on {order.date}

                </p>

                <p>

                    {order.items} Item{order.items > 1 ? "s" : ""}

                </p>

                <h6>

                    ₹{order.total}

                </h6>

            </div>

            {/* Status */}

            <div className="order-status">

                <span

                    className={`status-badge ${order.status.toLowerCase()}`}

                >

                    {order.status}

                </span>

                <Link

                    to={`/orders/${order.id}`}

                    className="view-order-btn"

                >

                    View Details

                </Link>

            </div>

        </div>

    );

}

export default OrderCard;