import { orders } from "../../data/orders";
import "./RecentOrders.css";

function RecentOrders() {

    return (

        <div className="recent-orders">

            <h4>

                Recent Orders

            </h4>

            <table className="table">

                <thead>

                    <tr>

                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Status</th>
                        <th>Total</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        orders.slice(0,5).map(order => (

                            <tr key={order.id}>

                                <td>{order.id}</td>

                                <td>{order.customerName}</td>

                                <td>

                                    <span className={`status ${order.status.toLowerCase()}`}>

                                        {order.status}

                                    </span>

                                </td>

                                <td>

                                    ₹{order.totalAmount}

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default RecentOrders;