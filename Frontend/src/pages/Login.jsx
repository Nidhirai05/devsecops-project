import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import LoginForm from "../components/auth/LoginForm";

import "./Login.css";

function Login() {

    
    return (

        <>

            <Navbar />

            <div className="login-page">

                <div className="container">

                    <div className="row justify-content-center">

                        <div className="col-lg-5 col-md-7">

                            <LoginForm />

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default Login;