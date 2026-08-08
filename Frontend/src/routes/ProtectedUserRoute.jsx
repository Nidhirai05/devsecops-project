import { Navigate } from "react-router-dom";

function ProtectedUserRoute({ children }) {

    const role = localStorage.getItem("role");

    if (!role) {

        return <Navigate to="/login" replace />;

    }

    return children;

}

export default ProtectedUserRoute;