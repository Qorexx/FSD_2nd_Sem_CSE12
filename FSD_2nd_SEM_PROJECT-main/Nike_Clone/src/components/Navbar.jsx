function Navbar({
  search,
  setSearch,
  cartCount,
  setCartOpen
}) {

  return (

    <nav className="navbar">

      <a href="https://www.nike.com/in/">

        <img
         src="https://cdn.freebiesupply.com/logos/large/2x/nike-4-logo-png-transparent.png"
          alt="Nike"
          className="logo"
        />

      </a>

      <ul className="nav-links">

        <li><a href="https://www.nike.in/lp/men-desktop">Men</a></li>
        <li><a href="https://www.nike.in/lp/women-desktop">Women</a></li>
        <li><a href="https://www.nike.in/lp/kids-desktop">Kids</a></li>
        <li><a href="https://www.nike.in/lp/sale">Sale</a></li>

      </ul>

      <div className="nav-right">

        <input
          type="text"
          placeholder="Search sneakers..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <button
          className="cart-btn"
          onClick={() =>
            setCartOpen(true)
          }
        >

          🛒

          {
            cartCount > 0 && (
              <span className="cart-badge">
                {cartCount}
              </span>
            )
          }

        </button>

      </div>

    </nav>

  );
}

export default Navbar;