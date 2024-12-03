import './Navbar.css';
import 'boxicons'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="head">
            <h1 className='logo'>Julia Luxe <span>accessoires</span></h1>
            </div>
            <Link to={"/cart"}><box-icon name='shopping-bag' type='solid' color='#353535' size='md' style={{position: "absolute" ,top: "15px", right:"10px" }} ></box-icon></Link>
        </div>
    );
};

export default Navbar;