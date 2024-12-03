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
import { Link } from 'react-router-dom';
import bague from "./assets/bague.jpg"
import boucle from "./assets/boucle.jpg"
import collier from "./assets/collier.jpg"
import bracelet from "./assets/bracelet.jpg"
import parrure from "./assets/image1.jpg"
import montre from "./assets/montre.jpg"

const App = () => {
  const images = [image1,image2,image3, image4, image5, image6, image7, image8]
  return (
    <div >
      <Navbar></Navbar>
      <div className="filter">
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
        </div>
      <div className="posts">
        
        <div className="posts-group">
          {images.map((image)=>{
            return <Link to={"/post"} key={image}><Post image={image} /></Link>
          })}
        
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;