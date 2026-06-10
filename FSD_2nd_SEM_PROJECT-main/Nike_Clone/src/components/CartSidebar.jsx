function CartSidebar({
  cart,
  cartOpen,
  setCartOpen,
  updateQty,
  removeFromCart,
  total
}) {

  if(!cartOpen) return null;

  return (

    <>

      <div
        className="overlay"
        onClick={() =>
          setCartOpen(false)
        }
      ></div>

      <div className="cart-sidebar">

        <div className="cart-header">

          <h2>Your Cart</h2>

          <button
            className="close-btn"
            onClick={() =>
              setCartOpen(false)
            }
          >
            ✖
          </button>

        </div>

        <div className="cart-body">

          {
            cart.length === 0
            ? (
              <p>Cart is Empty</p>
            )
            : (
              cart.map((item) => (

                <div
                  key={item.id}
                  className="cart-item"
                >

                  <img
                    src={item.img}
                    alt={item.name}
                  />

                  <div>

                    <h4>{item.name}</h4>

                    <p>
                      ₹{item.price}
                    </p>

                    <div className="qty-row">

                      <button
                        onClick={() =>
                          updateQty(item.id, -1)
                        }
                      >
                        -
                      </button>

                      <span>
                        {item.qty}
                      </span>

                      <button
                        onClick={() =>
                          updateQty(item.id, 1)
                        }
                      >
                        +
                      </button>

                    </div>

                    <button
                      className="remove-btn"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))
            )
          }

        </div>

        <div className="cart-footer">

          <h3>
            Total: ₹{total}
          </h3>

        </div>

      </div>

    </>

  );
}

export default CartSidebar;