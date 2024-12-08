import Navbar from '../../componenets/navbar/Navbar';
import Footer from '../../componenets/footer/Footer';
import './Cart.css';
import image1 from '../../assets/image1.jpg'
import { useState } from 'react';

const Cart = () => {
    const [quantity, setQuantity] = useState(1);

    function increment() {
        setQuantity(function (prevCount) {
            return (prevCount += 1);
        });
    }

    function decrement() {
        setQuantity(function (prevCount) {
            if (prevCount > 0) {
                return (prevCount -= 1);
            } else {
                return (prevCount = 0);
            }
        });
    }
    return (
        <div  className="cart">
            <Navbar></Navbar>
            <div className="cart-container">
                <div className="cart-header">
                    <h2>Shopping bag</h2>
                </div>
                <div className="cart-body">
                    <div className="items">
                    <div className="item">
                        <img src={image1} alt="" />
                        <p>Lorem ipsum dolor</p>
                        <p>2000da</p>
                        <div className="quantity">
                                <button onClick={decrement}>-</button>
                                <span>{quantity}</span>
                                <button onClick={increment}>+</button>
                            </div>
                            <box-icon name='x' color='#5c5a5c' style={{position: "absolute" ,top: "15px", right:"10px" }}  ></box-icon>
                    </div>
                    <div className="item">
                        <img src={image1} alt="" />
                        <p className='item-name'>Lorem </p>
                        <p>2000da</p>
                        <div className="quantity">
                        <button onClick={decrement}>-</button>
                                <span>{quantity}</span>
                                <button onClick={increment}>+</button>
                            </div>
                            <box-icon name='x' color='#5c5a5c' style={{position: "absolute" ,top: "15px", right:"10px" }} ></box-icon>
                    </div>
                    </div>
                    <div className="checkout">
                    <div className="amount">
                        <h3>SUMMARY</h3>
                        <div className="price">
                            <p>Subtotal</p>
                            <h5>85$</h5>
                        </div>
                        <div className="price">
                            <p>Shipping</p>
                            <h5>5$</h5>
                        </div>
                        <span></span>
                        <div className="price">
                            <p>Total</p>
                            <h4>90$</h4>
                        </div>
                    </div>
                    <button>GO TO CHECKOUT</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Cart;