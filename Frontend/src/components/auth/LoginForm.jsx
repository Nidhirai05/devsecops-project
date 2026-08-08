import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";



import "./LoginForm.css";

function LoginForm() {

    const { login } = useAuth();

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const [rememberMe, setRememberMe] = useState(false);

    //const [role, setRole] = useState("customer");

   const handleSubmit = async (e) => {

    e.preventDefault();

    if (!email || !password) {

        alert("Please enter email and password.");
        return;
    }

    try {

        const response = await loginUser({

            email,
            password

        });

        login(response.data);

        alert("Login Successful");

        if (response.data.role === "ADMIN") {

            navigate("/admin/dashboard");

        } else {

            navigate("/");

        }

    } catch (error) {

        alert(

            error.response?.data?.message ||

            "Invalid email or password"

        );

    }

};

    return (

        <div className="login-card">

            <h2>

                Welcome Back

            </h2>

            <p>

                Login to your StyleAura account

            </p>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">

                    <label className="form-label">

                        Email Address

                    </label>

                    <input

                        type="email"

                        className="form-control"

                        placeholder="Enter your email"

                        value={email}

                        onChange={(e) =>

                            setEmail(e.target.value)

                        }

                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">

                        Password

                    </label>

                    <div className="password-box">

                        <input

                            type={

                                showPassword

                                    ?

                                    "text"

                                    :

                                    "password"

                            }

                            className="form-control"

                            placeholder="Enter your password"

                            value={password}

                            onChange={(e) =>

                                setPassword(e.target.value)

                            }

                        />

                        <button

                            type="button"

                            className="password-toggle"

                            onClick={() =>

                                setShowPassword(!showPassword)

                            }

                        >

                            <i

                                className={

                                    showPassword

                                        ?

                                        "bi bi-eye-slash"

                                        :

                                        "bi bi-eye"

                                }

                            ></i>

                        </button>

                    </div>

                </div>

               

                <div className="login-options">

                    <label>

                        <input

                            type="checkbox"

                            checked={rememberMe}

                            onChange={(e) =>

                                setRememberMe(e.target.checked)

                            }

                        />

                        Remember Me

                    </label>

                    <Link to="/forgot-password">

                        Forgot Password?

                    </Link>

                </div>

                <button

                    type="submit"

                    className="login-btn"

                >

                    Login

                </button>

            </form>

            <div className="register-link">

                Don't have an account?

                <Link to="/register">

                    Create Account

                </Link>

            </div>

        </div>

    );

}

export default LoginForm;