import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="container nav-flex">
          <div className="logo">Shopcart</div>

          <div className="nav-links">
            <a href="#">Categories</a>
            <a href="#">Deals</a>
            <a href="#">What's New</a>
            <a href="#">Delivery</a>
          </div>

          <div className="nav-right">
            <input type="text" placeholder="Search Product" className="search" />
            <button className="icon">👤</button>
            <button className="icon">🛒</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero container">
        <div className="hero-left">
          <h1>Shopping And Department Store.</h1>
          <p>
            Shopping is a bit of a relaxing hobby for me, which is sometimes
            troubling for the bank balance.
          </p>
          <button className="hero-btn">Learn More</button>
        </div>

        <div className="hero-right">
          <div className="hero-img"></div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container">
        <h2 className="section-title">Shop Our Top Categories</h2>

        <div className="cat-grid">
          {["Furniture", "Hand Bag", "Books", "Tech", "Sneakers", "Travel"].map(
            (c) => (
              <div key={c} className="cat-card">
                <div className="cat-img"></div>
                <p>{c}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* DEALS */}
      <section className="container">
        <h2 className="section-title">Today's Best Deals For You!</h2>

        <div className="product-grid">
          {[
            { name: "HomePod mini", price: "$99" },
            { name: "Instax Mini 9", price: "$69" },
            { name: "Base Camp Duffel M", price: "$129" },
            { name: "Tote Medium", price: "$59" },
          ].map((item) => (
            <div className="product-card" key={item.name}>
              <div className="product-img"></div>
              <h4>{item.name}</h4>
              <p className="price">{item.price}</p>
              <button className="add-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* BRANDS */}
      <section className="container">
        <h2 className="section-title">Choose By Brand</h2>

        <div className="brand-grid">
          {[
            "Staples",
            "Sprouts",
            "Grocery Outlet",
            "Mollie Stores",
            "Target",
            "Be Smart",
          ].map((b) => (
            <div className="brand-pill" key={b}>
              {b}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Shopcart. All rights reserved.</p>
      </footer>
    </div>
  );
}
