import './App.css';
import Footer from './componenets/footer/Footer';
import Navbar from './componenets/navbar/Navbar';
import Post from './componenets/post/Post';
import data from "./data"
import hero from './assets/home-main.webp'
import { Link } from 'react-router-dom';
import shipping from "./assets/shipping.png"
import quality from "./assets/quality.png"
import support from "./assets/support.png"

const App = () => {

  return (
    <>
      <Navbar></Navbar>
      <div className="hero">
        <div className="hero-content">
          <h1>Where Elegance Meets <br /> Your Unique Taste.</h1>
          <div className="bottom-content">
          <span></span>
            <p>Discover our products</p>
          </div>
        </div>
        <img src={hero} alt="" />
      </div>
        <section className='latest'>
          <div className="latest-title">
          <h1>LATEST COLLECTIONS</h1>
          <span className='line'></span>
          </div>
      <div className="posts">
        
        <div className="posts-group">
          {data.map((product)=>{
            return <Post key={product.id} product={product} />
          })}
        
        </div>
      </div>
      </section>
      <section className='features'>
        <div className="feature">
          <img src={quality} alt="" />
          <p>Guaranteed quality</p>
        </div>
        <div className="feature">
          <img src={shipping} alt="" />
          <p>Shipping to all 58 wilaya</p>
        </div>
        <div className="feature">
          <img src={support} alt="" />
          <p>We provide 24/7 customer support</p>
        </div>

      </section>
      <Footer></Footer>
    </>
  );
};

export default App;