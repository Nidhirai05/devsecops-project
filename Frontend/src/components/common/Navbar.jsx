import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./Navbar.css";

function Navbar() {

    const [searchText, setSearchText] = useState("");

    const navigate = useNavigate();

    const { cartItems } = useCart();

    const cartCount = cartItems.reduce(

        (total, item) => total + item.quantity,

        0

    );

    const role = localStorage.getItem("role");

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">

            <div className="container">

                {/* Logo */}

                <Link className="navbar-brand logo" to="/">
                    <div className="brand-logo">
                        <span className="style">StyleAura</span>

                    </div>
                </Link>

                {/* Mobile Toggle */}

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbar">


                    {/* Navigation */}

                    <ul className="navbar-nav ms-4">

                        <li className="nav-item">
                            <NavLink className="main-nav-link" to="/">
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item dropdown">

                            <a
                                className="main-nav-link dropdown-toggle"
                                href="#"
                                id="categoryDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                onClick={(e) => e.preventDefault()}
                            >
                                Categories
                            </a>

                            <ul
                                className="dropdown-menu"
                                aria-labelledby="categoryDropdown"
                            >

                                <li>
                                    <Link className="dropdown-item" to="/category/ethnic-wear">
                                        Ethnic Wear
                                    </Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" to="/category/western-wear">
                                        Western Wear
                                    </Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" to="/category/kurtis">
                                        Kurtis
                                    </Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" to="/category/dresses">
                                        Dresses
                                    </Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" to="/category/tops">
                                        Tops
                                    </Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" to="/category/bottom-wear">
                                        Bottom Wear
                                    </Link>
                                </li>

                            </ul>

                        </li>

                        {/* <li className="nav-item">
                            <NavLink className="main-nav-link" to="/new-arrivals">
                                New Arrivals
                            </NavLink>
                        </li> */}

                        <li className="nav-item">
                            <NavLink className="main-nav-link" to="/sale">
                                Sale
                            </NavLink>
                        </li>

                    </ul>

                    {/* Search */}

                    <form
                        className="d-flex mx-lg-auto my-3 my-lg-0 search-box"
                        onSubmit={(e) => {

                            e.preventDefault();

                            if (searchText.trim()) {

                                navigate(
                                    `/search?q=${encodeURIComponent(searchText)}`
                                );

                            }

                        }}
                    >

                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search products..."

                            value={searchText}

                            onChange={(e) =>
                                setSearchText(e.target.value)
                            }

                        />

                        <button
                            className="btn search-btn"
                            type="submit"
                        >
                            <i className="bi bi-search"></i>
                        </button>

                    </form>

                    {/* Icons */}

                    <div className="d-flex align-items-center navbar-actions">

                        <Link to="/wishlist" className="icon-btn me-3">
                            <i className="bi bi-heart"></i>
                        </Link>

                        <Link
                            to="/cart"
                            className="icon-btn me-3 position-relative"
                        >
                            <i className="bi bi-cart3"></i>

                            {cartCount > 0 && (

                                <span className="badge bg-danger rounded-pill cart-badge">

                                    {cartCount}

                                </span>

                            )}

                        </Link>

                        {/* <Link
                            to="/login"
                            className="btn login-btn"
                        >
                            Login
                        </Link> */}
                        {
                            role ? (

                                <>

                                    <Link
                                        to="/orders"
                                        className="account-link ms-2"
                                    >
                                        My Orders
                                    </Link>

                                    {
                                        role === "admin" && (

                                            <Link
                                                to="/admin/dashboard"
                                                className="account-link admin-link ms-3"
                                            >
                                                Admin
                                            </Link>

                                        )
                                    }

                                    <button
                                        className="btn login-btn ms-3"
                                        onClick={() => {

                                            localStorage.removeItem("role");

                                            navigate("/login");

                                        }}
                                    >
                                        Logout
                                    </button>

                                </>

                            ) : (

                                <Link
                                    to="/login"
                                    className="btn login-btn"
                                >
                                    Login
                                </Link>

                            )
                        }

                    </div>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;