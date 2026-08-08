import "./AddressForm.css";

function AddressForm({

    address,
    setAddress

}) {

    const handleChange = (e) => {

        setAddress({

            ...address,

            [e.target.name]: e.target.value

        });

    };

    return (

        <div className="address-form">

            <h4>

                Shipping Address

            </h4>

            <div className="row">

                <div className="col-md-6 mb-3">

                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Full Name"
                        value={address.name}
                        onChange={handleChange}
                    />

                </div>

                <div className="col-md-6 mb-3">

                    <input
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder="Phone Number"
                        value={address.phone}
                        onChange={handleChange}
                    />

                </div>

                <div className="col-12 mb-3">

                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        value={address.email}
                        onChange={handleChange}
                    />

                </div>

                <div className="col-12 mb-3">

                    <textarea

                        rows="3"

                        name="address"

                        className="form-control"

                        placeholder="Address"

                        value={address.address}

                        onChange={handleChange}

                    />

                </div>

                <div className="col-md-4 mb-3">

                    <input
                        type="text"
                        name="city"
                        className="form-control"
                        placeholder="City"
                        value={address.city}
                        onChange={handleChange}
                    />

                </div>

                <div className="col-md-4 mb-3">

                    <input
                        type="text"
                        name="state"
                        className="form-control"
                        placeholder="State"
                        value={address.state}
                        onChange={handleChange}
                    />

                </div>

                <div className="col-md-4 mb-3">

                    <input
                        type="text"
                        name="pincode"
                        className="form-control"
                        placeholder="Pincode"
                        value={address.pincode}
                        onChange={handleChange}
                    />

                </div>

            </div>

        </div>

    );

}

export default AddressForm;