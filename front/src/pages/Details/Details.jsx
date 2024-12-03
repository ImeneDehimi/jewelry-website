import Navbar from "../../componenets/navbar/Navbar";
import "./Details.css";
import SimpleImageSlider from "react-simple-image-slider";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";
import image8 from "../../assets/image8.jpg";
import Footer from "../../componenets/footer/Footer";
import { Link } from "react-router-dom";

const Details = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];
  return (
    <div className="details">
      <Navbar></Navbar>
      <div className="details-body">
        <div className="details-body-left">
          <SimpleImageSlider
            width={440}
            height={500}
            images={images}
            showBullets={true}
            showNavs={true}
            navMargin={5}
       
          />
        </div>
        <div className="details-body-right">
            <h2>neckless</h2>
            <p><b>Métal: </b>acier inoxidable</p>
            <p><b>type de produit: </b>parure</p>
            <p><b>Numéro: </b>103</p>
            <h3>3500DA</h3>
            <p><b>Description: </b></p>
            <p><b>livraison 58 wilaya</b></p>
            <Link to={"/cart"}><button>Add to Cart</button></Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Details;
