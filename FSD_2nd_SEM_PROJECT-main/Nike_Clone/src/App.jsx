import { useState } from "react";

import "./App.css";

import PRODUCTS from "./data/products";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import CategoryFilter from "./components/CategoryFilter";
import ProductGrid from "./components/ProductGrid";
import CartSidebar from "./components/CartSidebar";
import Footer from "./components/Footer";

const BANNERS = [

  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1800&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1800&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1800&auto=format&fit=crop"

];

const CATEGORIES = [
  "All",
  "Running",
  "Lifestyle",
  "Basketball"
];

function App() {

  const [cart, setCart] =
    useState([]);

  const [cartOpen, setCartOpen] =
    useState(false);

  const [slide, setSlide] =
    useState(0);

  const [search, setSearch] =
    useState("");

  const [wishlist, setWishlist] =
    useState([]);

  const [activeCategory, setActiveCategory] =
    useState("All");

  function addToCart(product) {

    setCart((prev) => {

      const exists =
        prev.find(
          (i) => i.id === product.id
        );

      if(exists) {

        return prev.map((i) =>

          i.id === product.id
          ? {
              ...i,
              qty: i.qty + 1
            }
          : i
        );
      }

      return [
        ...prev,
        {
          ...product,
          qty: 1
        }
      ];
    });
  }

  function updateQty(id, delta) {

    setCart((prev) =>

      prev
        .map((i) =>

          i.id === id
          ? {
              ...i,
              qty: i.qty + delta
            }
          : i
        )
        .filter((i) => i.qty > 0)
    );
  }

  function removeFromCart(id) {

    setCart((prev) =>

      prev.filter((i) => i.id !== id)
    );
  }

  const total =
    cart.reduce(
      (s, i) =>
        s + i.price * i.qty,
      0
    );

  const cartCount =
    cart.reduce(
      (s, i) =>
        s + i.qty,
      0
    );

  const filtered =
    PRODUCTS.filter((p) => {

      const matchesCategory =

        activeCategory === "All"
        ||
        p.category === activeCategory;

      const matchesSearch =

        p.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      return (
        matchesCategory &&
        matchesSearch
      );
    });

  return (

    <div>

      <Navbar
        search={search}
        setSearch={setSearch}
        cartCount={cartCount}
        setCartOpen={setCartOpen}
      />

      <Banner
        banners={BANNERS}
        slide={slide}
        setSlide={setSlide}
      />

      <div className="section">

        <h2 className="section-title">
          Featured
        </h2>

        <CategoryFilter
          categories={CATEGORIES}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <ProductGrid
          filtered={filtered}
          
          addToCart={addToCart}
        />

      </div>

      <CartSidebar
        cart={cart}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        updateQty={updateQty}
        removeFromCart={removeFromCart}
        total={total}
      />

      <Footer />

    </div>

  );
}

export default App;