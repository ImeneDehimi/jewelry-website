import Navbar from "../../componenets/navbar/Navbar";
import Footer from "../../componenets/footer/Footer";
import "./Collection.css";
import Post from "../../componenets/post/Post";
import { useState } from "react";
import data from "../../data";

const Collection = () => {
  const [filteredData, setFilteredData] = useState(data);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Handle checkbox click
  const handleCategoryChange = (category) => {
    let updatedCategories;

    if (selectedCategories.includes(category)) {
      // remove if already selected
      updatedCategories = selectedCategories.filter((c) => c !== category);
    } else {
      // add if not selected
      updatedCategories = [...selectedCategories, category];
    }

    setSelectedCategories(updatedCategories);

    // filter data based on selected categories
    if (updatedCategories.length === 0) {
      setFilteredData(data);
    } else {
      const filteredProducts = data.filter((product) =>
        updatedCategories.includes(product.category)
      );
      setFilteredData(filteredProducts);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="collection">
        <div className="collection-filter">
          <h1>Filters</h1>
          <div className="filter">
            <div className="filter-box">
              <h3>Categories</h3>

              {/* Category Checkboxes */}
              <div className="category">
                <input
                  type="checkbox"
                  name="set"
                  checked={selectedCategories.includes("set")}
                  onChange={() => handleCategoryChange("set")}
                />
                <p>Set</p>
              </div>

              <div className="category">
                <input
                  type="checkbox"
                  name="ring"
                  checked={selectedCategories.includes("ring")}
                  onChange={() => handleCategoryChange("ring")}
                />
                <p>Ring</p>
              </div>

              <div className="category">
                <input
                  type="checkbox"
                  name="earrings"
                  checked={selectedCategories.includes("earrings")}
                  onChange={() => handleCategoryChange("earrings")}
                />
                <p>Earrings</p>
              </div>

              <div className="category">
                <input
                  type="checkbox"
                  name="necklace"
                  checked={selectedCategories.includes("necklace")}
                  onChange={() => handleCategoryChange("necklace")}
                />
                <p>Necklace</p>
              </div>

              <div className="category">
                <input
                  type="checkbox"
                  name="watch"
                  checked={selectedCategories.includes("watch")}
                  onChange={() => handleCategoryChange("watch")}
                />
                <p>Watch</p>
              </div>

              <div className="category">
                <input
                  type="checkbox"
                  name="bracelet"
                  checked={selectedCategories.includes("bracelet")}
                  onChange={() => handleCategoryChange("bracelet")}
                />
                <p>Bracelet</p>
              </div>
            </div>
          </div>
        </div>

        {/* Display products */}
        <div className="collection-content">
          <div className="collection-title">
            <h1>Our collections</h1>
            <span></span>
          </div>

          <div className="collection-items">
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <Post key={item.id} product={item} />
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Collection;
