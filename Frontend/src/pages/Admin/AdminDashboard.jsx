import AdminLayout from "../../components/admin/AdminLayout";
import DashboardCard from "../../components/admin/DashboardCard";
import RecentOrders from "../../components/admin/RecentOrders";

import { allProducts } from "../../data/products";
import { orders } from "../../data/orders";

function AdminDashboard() {

    const revenue = orders.reduce(

        (total, order) => total + order.totalAmount,

        0

    );

    return (

        <AdminLayout>

            <div className="row g-4">

                <div className="col-lg-3 col-md-6">

                    <DashboardCard

                        title="Products"

                        value={allProducts.length}

                        icon="bi bi-box-seam"

                        color="#7C3AED"

                    />

                </div>

                <div className="col-lg-3 col-md-6">

                    <DashboardCard

                        title="Orders"

                        value={orders.length}

                        icon="bi bi-bag-check"

                        color="#2563EB"

                    />

                </div>

                <div className="col-lg-3 col-md-6">

                    <DashboardCard

                        title="Customers"

                        value="6"

                        icon="bi bi-people"

                        color="#059669"

                    />

                </div>

                <div className="col-lg-3 col-md-6">

                    <DashboardCard

                        title="Revenue"

                        value={`₹${revenue}`}

                        icon="bi bi-currency-rupee"

                        color="#EA580C"

                    />

                </div>

            </div>

            <RecentOrders />

        </AdminLayout>

    );

}

export default AdminDashboard;