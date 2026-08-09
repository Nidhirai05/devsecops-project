import AdminLayout from "../../components/admin/AdminLayout";
import OrderTable from "../../components/admin/OrderTable";

import { orders } from "../../data/orders";

function AdminOrders() {

    return (

        <AdminLayout>

            <OrderTable

                orders={orders}

            />

        </AdminLayout>

    );

}

export default AdminOrders;