import "./AdminHeader.css";

function AdminHeader() {

    return (

        <header className="admin-header">

            <div>

                <h2>

                    Dashboard

                </h2>

                <p>

                    Welcome back, Admin

                </p>

            </div>

            <div className="admin-header-right">

                <button
                    className="notification-btn"
                    title="Notifications"
                >

                    <i className="bi bi-bell"></i>

                </button>

                <div className="admin-profile">

                    <div className="profile-icon">

                        <i className="bi bi-person-fill"></i>

                    </div>

                    <div>

                        <h6>

                            Admin

                        </h6>

                        <small>

                            Administrator

                        </small>

                    </div>

                </div>

            </div>

        </header>

    );

}

export default AdminHeader;