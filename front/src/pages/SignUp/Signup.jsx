import { Link } from 'react-router-dom';
import Footer from '../../componenets/footer/Footer';
import Navbar from '../../componenets/navbar/Navbar';
import './Signup.css';

const Signup = () => {
    return (
        <>
            <Navbar></Navbar>

      {" "}
      <div className="login">
      <form className='login-container'>
      <div className="about-title">
        <h1>Sign Up</h1>
        <span></span>
      </div>
      
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      
      <div className="create-acc">
        <Link><p>Forgot password?</p></Link>
        <Link to={"/signin"}><p>Sign in here</p></Link>
      </div>
      <button >Sign Up</button>
      </form>
      </div>
            <Footer></Footer>
        </>
    );
};

export default Signup;