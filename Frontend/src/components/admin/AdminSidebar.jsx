import { NavLink, useNavigate } from "react-router-dom";
import "./AdminSidebar.css";

function AdminSidebar() {

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem("role");

        navigate("/login");

    };

    return (

        <aside className="admin-sidebar">

            <div className="admin-logo">

                <h3>StyleAura</h3>

                <p>Admin Panel</p>

            </div>

            <nav>

                <NavLink
                    to="/admin/dashboard"
                    className="sidebar-link"
                >
                    <i className="bi bi-speedometer2"></i>
                    Dashboard
                </NavLink>

                <NavLink
                    to="/admin/products"
                    className="sidebar-link"
                >
                    <i className="bi bi-box-seam"></i>
                    Products
                </NavLink>

                <NavLink
                    to="/admin/categories"
                    className="sidebar-link"
                >
                    <i className="bi bi-grid"></i>
                    Categories
                </NavLink>

                <NavLink
                    to="/admin/orders"
                    className="sidebar-link"
                >
                    <i className="bi bi-bag-check"></i>
                    Orders
                </NavLink>

            </nav>

            <div className="admin-sidebar-bottom">

                <button
                    className="sidebar-action"
                    onClick={() => navigate("/")}
                >
                    <i className="bi bi-arrow-left"></i>
                    Back to Store
                </button>

                <button
                    className="sidebar-action logout-action"
                    onClick={handleLogout}
                >
                    <i className="bi bi-box-arrow-right"></i>
                    Logout
                </button>

            </div>

        </aside>

    );

}

export default AdminSidebar;