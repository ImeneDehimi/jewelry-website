import Navbar from "../../componenets/navbar/Navbar";
import Footer from "../../componenets/footer/Footer";
import "./Contact.css";
import contact from "./../../assets/contact.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser"; 
import 'react-toastify/dist/ReactToastify.css';
import {  toast } from 'react-toastify';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  console.log(e.target.value);
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_YOUR_TEMPLATE_ID,
          form.current,
          {
            publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            toast.success("Email sent successfully!");
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast.error(`Failed to send email`);
          }
        );
    };
  return (
    <div>
      <Navbar></Navbar>
      <div className="about-title">
          <h1>Contact Us</h1>
          <span></span>
        </div>
      <div className="contact">
        <div className="contact-left">
          <img src={contact} alt="" />
        </div>
        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              name="name"
              type="text"
              placeholder="Enter Your Name"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Enter Your Email"
              required
            />
            <input
              name="subject"
              type="text"
              placeholder="Enter Your Subject"
            />
            <textarea
              name="message"
              cols="10"
              rows="10"
              placeholder="Enter Your Message"
              required
            ></textarea>
            <div className="button">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
