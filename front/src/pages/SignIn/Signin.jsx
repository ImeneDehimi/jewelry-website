import { Link } from "react-router-dom";
import Footer from "../../componenets/footer/Footer";
import Navbar from "../../componenets/navbar/Navbar";
import "./Signin.css";

const Signin = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="login">
      <form className="login-container">
        {" "}
        <div className="about-title">
          <h1>Sign In</h1>
          <span className="login-title-line"></span>
        </div>
          <input type="text" placeholder="username" required />
          <input type="text" placeholder="Password" required/>
        <div className="create-acc">
          <Link><p>Forgot password?</p></Link>
          <Link to={"/signup"}>
            <p>Create account</p>
          </Link>
        </div>
        <button>Sign In</button>
      </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Signin;
