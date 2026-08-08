import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import OrderCard from "../components/orders/OrderCard";
import { allProducts } from "../data/products";
import "./MyOrders.css";
import { orders } from "../data/orders";

function MyOrders() {

    // Temporary Data



    return (

        <>

            <Navbar />

            <div className="my-orders-page">

                <div className="container">

                    <h2 className="orders-title">

                        My Orders

                    </h2>

                    {
                        orders.map(order => (

                            <OrderCard

                                key={order.id}

                                order={{
                                    ...order,
                                    image: order.products[0].image,
                                    items: order.products.length
                                }}

                            />

                        ))
                    }

                </div>

            </div>

            <Footer />

        </>

    );

}

export default MyOrders;