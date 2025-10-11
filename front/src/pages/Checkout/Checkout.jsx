import './Checkout.css';
import { useState } from 'react';
import Navbar from "../../componenets/navbar/Navbar";
import Footer from "../../componenets/footer/Footer";

const Checkout = () => {
     const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    const isFilled = Object.values(formData).every((val) => val.trim() !== "");
    if (!isFilled) {
      alert("Please fill in all fields.");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="thank-you">
        <h2>Thank you for your purchase!</h2>
        <p>Your order has been received and will be processed shortly.</p>
        <button onClick={() => setSubmitted(false)}>Back to Checkout</button>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <label>
            Full Name
            <input
              type="text"
              name="fullName"
              placeholder="Julia Smith"
              value={formData.fullName}
              onChange={handleChange}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="julia@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          <label>
            Address
            <input
              type="text"
              name="address"
              placeholder="123 Gold Street"
              value={formData.address}
              onChange={handleChange}
            />
          </label>

          <div className="row">
            <label>
              City
              <input
                type="text"
                name="city"
                placeholder="Paris"
                value={formData.city}
                onChange={handleChange}
              />
            </label>
            <label>
              Postal Code
              <input
                type="text"
                name="postalCode"
                placeholder="75001"
                value={formData.postalCode}
                onChange={handleChange}
              />
            </label>
          </div>

          <label>
            Country
            <input
              type="text"
              name="country"
              placeholder="France"
              value={formData.country}
              onChange={handleChange}
            />
          </label>
        </div>

        <h3>Payment Details</h3>

        <div className="form-section">
          <label>
            Card Number
            <input
              type="text"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={formData.cardNumber}
              onChange={handleChange}
            />
          </label>

          <div className="row">
            <label>
              Expiry (MM/YY)
              <input
                type="text"
                name="expiry"
                placeholder="12/28"
                value={formData.expiry}
                onChange={handleChange}
              />
            </label>
            <label>
              CVV
              <input
                type="password"
                name="cvv"
                placeholder="123"
                value={formData.cvv}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <button type="submit">Confirm Order</button>
      </form>
    </div>
  );
}
export default Checkout;