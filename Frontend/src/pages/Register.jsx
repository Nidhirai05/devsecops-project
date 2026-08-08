import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import RegisterForm from "../components/auth/RegisterForm";

import "./Register.css";

function Register() {

    return (

        <>

            <Navbar />

            <div className="register-page">

                <div className="container">

                    <div className="row justify-content-center">

                        <div className="col-lg-6 col-md-8">

                            <RegisterForm />

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default Register;