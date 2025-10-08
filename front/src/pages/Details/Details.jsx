import Navbar from "../../componenets/navbar/Navbar";
import "./Details.css";
import SimpleImageSlider from "react-simple-image-slider";
import Footer from "../../componenets/footer/Footer";
import { Link, useParams } from "react-router-dom";
import data from './../../data'
import { useDispatch } from "react-redux";
import { addToCart } from "./../../redux/slices/cart";

const Details = () => {
  const params = useParams();
  const dispatch = useDispatch()
  const postId = params.postId;
  const details = (data[postId-1])
  const images = [
    details.img
  ];


  return (
    <div className="details">
      <Navbar></Navbar>
      <div className="details-body">
        <div className="details-body-left">
          <SimpleImageSlider
            width={400}
            height={480}
            images={images}
            showBullets={true}
            showNavs={true}
            navMargin={5}
          />
        </div>
        <div className="details-body-right">
            <h2>{details.name}</h2>
            <p><b>Métal: </b>acier inoxidable</p>
            <p><b>type de produit: </b>{details.category}</p>
            <p><b>Numéro: </b>103</p>
            <h3>{details.price}DA</h3>
            <p><b>Description: </b></p>
            <p><b>{details.desc}</b></p>
            <Link to={"/cart"}><button onClick={()=>dispatch(addToCart(details))}>Add to Cart</button></Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Details;
