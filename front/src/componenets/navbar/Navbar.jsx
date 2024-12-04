import "./Navbar.css";
import "boxicons";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="head">
        <h1 className="logo">
          Julia Luxe <span>accessoires</span>
        </h1>
        <ul className="navigation">
          <NavLink to={"/"}>
            <p>Home</p>
            <hr />{" "}
          </NavLink>
          <NavLink to={"/collection"}>
            <p>Collection</p>
            <hr />
          </NavLink>
          <NavLink to={"/about"}>
            <p>About</p>
            <hr />
          </NavLink>
          <NavLink to={"/contact"}>
            <p>Contact</p>
            <hr />
          </NavLink>
        </ul>
        <div className="nav-right">
          <Link to={"/cart"}>
            <box-icon
              name="shopping-bag"
              type="solid"
              color="#353535"
              size="30px"
              style={{marginRight:"20px"}}
            ></box-icon>
          </Link>
          <Link>
            <box-icon
              color="#353535"
              type="solid"
              name="user"
              size="30px"
            ></box-icon>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
