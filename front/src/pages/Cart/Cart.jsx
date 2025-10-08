import Navbar from "../../componenets/navbar/Navbar";
import Footer from "../../componenets/footer/Footer";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { deletefromCart, updateQuantity } from "./../../redux/slices/cart";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleEdite = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };
  const countTotal = () => {
    let total1 = 0;
    cart.map((item) => {
      total1 += Number(item.price) * item.quantity;
      console.log(item.price);
    });
    return total1
  };
  
  let total = countTotal();
  // cart.map((item)=>(item.price))

  return (
    <div className="cart">
      <Navbar></Navbar>
      <div className="cart-container">
        <div className="cart-header">
          <h2>Shopping bag</h2>
        </div>
        <div className="cart-body">
          <div className="items">
            {cart.map((item) => (
              <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <p className="item-name">{item.name} </p>
                <p>{item.price}</p>
                <div className="quantity">
                  <button
                    onClick={() => {
                      item.quantity > 1
                        ? handleEdite(item.id, item.quantity - 1)
                        : (item.quantity = 1);
                    }}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleEdite(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <box-icon
                  name="x"
                  color="black"
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => dispatch(deletefromCart(item.id))}
                ></box-icon>
              </div>
            ))}
          </div>
          <div className="checkout">
            <div className="amount">
              <h3>SUMMARY</h3>
              <span></span>
              <div className="price">
                <p>Subtotal</p>
                <h5>{total}DA</h5>
              </div>
            </div>
            <button>GO TO CHECKOUT</button>
            <Link to="/collection"><button>CONTINUE SHOPPING</button></Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Cart;
