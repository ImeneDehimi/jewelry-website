import './Navbar.css';
import 'boxicons'

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1 className='logo'>Julia Luxe <span>accessoires</span></h1>
            <button>Se déconnecter</button>
        </div>
    );
};

export default Navbar;