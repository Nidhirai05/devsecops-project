import "./PaymentMethod.css";

function PaymentMethod({

    paymentMethod,
    setPaymentMethod

}) {

    return (

        <div className="payment-method">

            <h4>

                Payment Method

            </h4>

            <div className="payment-option">

                <label>

                    <input

                        type="radio"

                        name="payment"

                        value="cod"

                        checked={paymentMethod === "cod"}

                        onChange={(e) =>

                            setPaymentMethod(e.target.value)

                        }

                    />

                    <span>

                        Cash on Delivery

                    </span>

                </label>

            </div>

            <div className="payment-option">

                <label>

                    <input

                        type="radio"

                        name="payment"

                        value="upi"

                        checked={paymentMethod === "upi"}

                        onChange={(e) =>

                            setPaymentMethod(e.target.value)

                        }

                    />

                    <span>

                        UPI

                    </span>

                </label>

            </div>

            <div className="payment-option">

                <label>

                    <input

                        type="radio"

                        name="payment"

                        value="card"

                        checked={paymentMethod === "card"}

                        onChange={(e) =>

                            setPaymentMethod(e.target.value)

                        }

                    />

                    <span>

                        Credit / Debit Card

                    </span>

                </label>

            </div>

        </div>

    );

}

export default PaymentMethod;