import Navbar from "../../componenets/navbar/Navbar";
import Footer from "../../componenets/footer/Footer";
import "./Collection.css";
import Post from "../../componenets/post/Post";

const Collection = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="collection">
        <div className="collection-filter">
          <h1>Filters</h1>
          <div className="filter">
            <div className="filter-box">
              <h3>Categories</h3>
              <div className="category">
                <input type="checkbox" name="" id="" />
                <p>Parrure</p>
              </div>
              <div className="category">
                <input type="checkbox" name="" id="" />
                <p>Collier</p>
              </div>
              <div className="category">
                <input type="checkbox" name="" id="" />
                <p>bracelet</p>
              </div>
              <div className="category">
                <input type="checkbox" name="" id="" />
                <p>Bague</p>
              </div>
              <div className="category">
                <input type="checkbox" name="" id="" />
                <p>Montre</p>
              </div>
              <div className="category">
                <input type="checkbox" name="" id="" />
                <p>Boucle</p>
              </div>
            </div>
          </div>
        </div>
        <div className="collection-content">
          <div className="collection-title">
            <h1>Our collections</h1>
            <span></span>
          </div>
          <div className="collection-items">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Collection;
