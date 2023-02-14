import "./Shopping.css";
import { useState } from "react";
import products from "./ProductList";

export default function Shopping() {
  const [cart, addCart] = useState({ products });
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    if (product.name.toLowerCase().includes(query.toLowerCase()))
      return product;
    if (product.searchable.includes(query.toLowerCase())) return product;
    else return;
  });

  function cancelSearch() {
    <button>
      {query}
      <img className="cancel_img" src="../cart/bigX.png" alt="x" />
    </button>;
  }

  return (
    <div className="cart_page">
      <span>
        <p className="company_title">Something Something Store</p>
      </span>
      <nav className="store_nav">
        <ul className="nav_section">
          <li className="nav_item" onClick={() => setQuery("")}>
            Home
          </li>
          <li className="nav_item" onClick={() => setQuery("produce")}>
            Produce
          </li>
          <li className="nav_item" onClick={() => setQuery("meat")}>
            Meat
          </li>
          <li className="nav_item" onClick={() => setQuery("snacks")}>
            Snacks
          </li>
        </ul>
        <ul className="nav_section">
          <li className="nav_item">
            <a href="./cart">
              <img className="nav_image" src="../cart/cart.jpg" alt="Cart" />
            </a>
          </li>
        </ul>
      </nav>
      <div className="search_outer_container">
        <div className="search_inner_container">
          <input
            className="search_bar"
            id="search_bar"
            placeholder="Search Items"
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                document.getElementById("search_button").click();
              }
            }}
            type="search"
          />
          <img
            className="nav_image"
            id="search_button"
            src="../cart/search.png"
            alt="Search Icon"
            onClick={() => {
              setQuery(document.getElementById("search_bar").value);
              document.getElementById("search_bar").value = "";
            }}
          />
        </div>
        <div className="current_search_container">
          <p className="current_search">
            <strong>Current Search: </strong>
          </p>
          <p className="searched_item" onClick={() => console.log("hello")}>
            {query}
          </p>
        </div>
      </div>
      <main className="all_items_container">
        <ul className="searchable_content">
          {filteredProducts.map((product) => (
            <li className="product_container">
              <img
                className="product_image"
                src={product.image}
                alt={product.alt}
              />
              <div className="product_details">
                <h4 className="product_name">{product.name}</h4>
                <div>
                  <p className="if_weight_based">{product.weightBased}</p>
                  <div className="price_container">
                    <p className="price_actual">
                      ${(product.price * product.productQuantity).toFixed(2)}
                    </p>
                    <p className="price_per">
                      ${product.price}/{product.byQuantity}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
          <li id="no_results"></li>
        </ul>
      </main>
    </div>
  );
}
