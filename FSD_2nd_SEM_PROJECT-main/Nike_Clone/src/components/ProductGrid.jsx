import ProductCard from "./ProductCard";

function ProductGrid({
  filtered,
  wishlist,
  toggleWishlist,
  addToCart
}) {

  return (

    <div className="product-grid">

      {
        filtered.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
            wishlist={wishlist}
            toggleWishlist={toggleWishlist}
            addToCart={addToCart}
          />

        ))
      }

    </div>

  );
}

export default ProductGrid;