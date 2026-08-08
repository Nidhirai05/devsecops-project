import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import "./AdminLayout.css";

function AdminLayout({ children }) {

    return (

        <div className="admin-layout">

            <AdminSidebar />

            <main className="admin-main">

                <AdminHeader />

                {children}

            </main>

        </div>

    );

}

export default AdminLayout;