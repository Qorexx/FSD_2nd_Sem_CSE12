function ProductCard({
  product,
  wishlist,
  toggleWishlist,
  addToCart
}) {

  return (

    <div className="product-card">

      <img
        src={product.img}
        alt={product.name}
        className="product-img"
      />

      <div className="product-info">

        <h3>{product.name}</h3>

        <p>{product.category}</p>

        <h4>
          ₹{product.price}
        </h4>

        <button
          className="add-btn"
          onClick={() =>
            addToCart(product)
          }
        >
          Add To Cart
        </button>

      </div>

    </div>

  );
}

export default ProductCard;