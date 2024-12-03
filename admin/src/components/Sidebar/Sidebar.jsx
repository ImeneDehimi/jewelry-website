import "./Sidebar.css";
import {NavLink} from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar-options">
      <NavLink to='/add' className="sidebar-option">
        <box-icon name="plus-circle" size="35px"></box-icon>
        <p>Ajouter produit</p>
      </NavLink>
      <NavLink to='/list' className="sidebar-option">
        <box-icon name="list-ul" color="#353535" size="35px"></box-icon>
        <p>List de produits</p>
      </NavLink>
      <NavLink to='/orders' className="sidebar-option">
        <box-icon name="list-check" color="#353535" size="35px"></box-icon>
        <p>Commandes</p>
      </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
