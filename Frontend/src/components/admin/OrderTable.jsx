import "./OrderTable.css";

function OrderTable({ orders }) {

    function handleStatusChange(id, status) {

        console.log("Order:", id);

        console.log("New Status:", status);

        alert("Order Status Updated");

    }

    return (

        <div className="order-table-wrapper">

            <div className="table-header">

                <h3>

                    Customer Orders

                </h3>

            </div>

            <table className="table align-middle">

                <thead>

                    <tr>

                        <th>Order ID</th>

                        <th>Customer</th>

                        <th>Date</th>

                        <th>Amount</th>

                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        orders.map(order => (

                            <tr key={order.id}>

                                <td>

                                    {order.id}

                                </td>

                                <td>

                                    {order.customerName}

                                </td>

                                <td>

                                    {order.orderDate}

                                </td>

                                <td>

                                    ₹{order.totalAmount}

                                </td>

                                <td>

                                    <select

                                        className="form-select"

                                        value={order.status}

                                        onChange={(e) =>

                                            handleStatusChange(

                                                order.id,

                                                e.target.value

                                            )

                                        }

                                    >

                                        <option>

                                            Processing

                                        </option>

                                        <option>

                                            Shipped

                                        </option>

                                        <option>

                                            Delivered

                                        </option>

                                    </select>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default OrderTable;