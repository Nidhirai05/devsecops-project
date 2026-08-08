import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../../services/authService";

import "./RegisterForm.css";

function RegisterForm() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        fullName: "",

        email: "",

        phone: "",

        password: "",

        confirmPassword: ""

    });

    const [showPassword, setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

   const handleSubmit = async (e) => {

    e.preventDefault();

    const {

        fullName,
        email,
        phone,
        password,
        confirmPassword

    } = formData;

    if (
        !fullName ||
        !email ||
        !phone ||
        !password ||
        !confirmPassword
    ) {

        alert("Please fill all fields.");
        return;
    }

    if (password !== confirmPassword) {

        alert("Passwords do not match.");
        return;
    }

    try {

        await registerUser({

            name: fullName,
            email,
            phone,
            password

        });

        alert("Registration Successful");

        navigate("/login");

    } catch (error) {

        alert(

            error.response?.data?.message ||

            "Registration Failed"

        );

    }

};

    return (

        <div className="register-card">

            <h2>

                Create Account

            </h2>

            <p>

                Join StyleAura and start shopping.

            </p>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">

                    <label className="form-label">

                        Full Name

                    </label>

                    <input

                        type="text"

                        className="form-control"

                        name="fullName"

                        value={formData.fullName}

                        onChange={handleChange}

                        placeholder="Enter your full name"

                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">

                        Email Address

                    </label>

                    <input

                        type="email"

                        className="form-control"

                        name="email"

                        value={formData.email}

                        onChange={handleChange}

                        placeholder="Enter your email"

                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">

                        Mobile Number

                    </label>

                    <input

                        type="tel"

                        className="form-control"

                        name="phone"

                        value={formData.phone}

                        onChange={handleChange}

                        placeholder="Enter your mobile number"

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

                            name="password"

                            value={formData.password}

                            onChange={handleChange}

                            placeholder="Create password"

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

                <div className="mb-4">

                    <label className="form-label">

                        Confirm Password

                    </label>

                    <div className="password-box">

                        <input

                            type={

                                showConfirmPassword

                                    ?

                                    "text"

                                    :

                                    "password"

                            }

                            className="form-control"

                            name="confirmPassword"

                            value={formData.confirmPassword}

                            onChange={handleChange}

                            placeholder="Confirm password"

                        />

                        <button

                            type="button"

                            className="password-toggle"

                            onClick={() =>

                                setShowConfirmPassword(!showConfirmPassword)

                            }

                        >

                            <i

                                className={

                                    showConfirmPassword

                                        ?

                                        "bi bi-eye-slash"

                                        :

                                        "bi bi-eye"

                                }

                            ></i>

                        </button>

                    </div>

                </div>

                <button

                    type="submit"

                    className="register-btn"

                >

                    Create Account

                </button>

            </form>

            <div className="login-link">

                Already have an account?

                <Link to="/login">

                    Login

                </Link>

            </div>

        </div>

    );

}

export default RegisterForm;