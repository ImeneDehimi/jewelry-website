import './App.css';
import Footer from './componenets/footer/Footer';
import Navbar from './componenets/navbar/Navbar';
import Post from './componenets/post/Post';
import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'
import image4 from './assets/image4.jpg'
import image5 from './assets/image5.jpg'
import image6 from './assets/image6.jpg'
import image7 from './assets/image7.jpg'
import image8 from './assets/image8.jpg'
import hero from './assets/home-main.jpg'
import { Link } from 'react-router-dom';
// import bague from "./assets/bague.jpg"
// import boucle from "./assets/boucle.jpg"
// import collier from "./assets/collier.jpg"
// import bracelet from "./assets/bracelet.jpg"
// import parrure from "./assets/image1.jpg"
// import montre from "./assets/montre.jpg"
import shipping from "./assets/shipping.png"
import quality from "./assets/quality.png"
import support from "./assets/support.png"

const App = () => {
  const images = [image1,image2,image3, image4, image5, image6, image7, image8]
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
      {/* <div className="filter">
          <div className="category">
            <img src={parrure} alt="" />
            <p>Parrure</p>
          </div>
          <div className="category">
            <img src={collier} alt="" />
            <p>Collier</p>
          </div>
          <div className="category">
            <img src={bracelet} alt="" />
            <p>Bracelet</p>
          </div>
          <div className="category">
            <img src={bague} alt="" />
            <p>Bague</p>
          </div>
          <div className="category">
            <img src={montre} alt="" />
            <p>Montre</p>
          </div>
          <div className="category">
            <img src={boucle} alt="" />
            <p>Boucle</p>
          </div>
        </div> */}
        <section className='latest'>
          <div className="latest-title">
          <h1>LATEST COLLECTIONS</h1>
          <span className='line'></span>
          </div>
      <div className="posts">
        
        <div className="posts-group">
          {images.map((image)=>{
            return <Link to={"/post"} key={image}><Post image={image} /></Link>
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