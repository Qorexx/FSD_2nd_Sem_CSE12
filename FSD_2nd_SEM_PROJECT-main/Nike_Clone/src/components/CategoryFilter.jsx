function CategoryFilter({
  categories,
  activeCategory,
  setActiveCategory
}) {

  return (

    <div className="category-row">

      {
        categories.map((cat) => (

          <button
            key={cat}
            className={
              activeCategory === cat
              ? "category-btn active"
              : "category-btn"
            }
            onClick={() =>
              setActiveCategory(cat)
            }
          >

            {cat}

          </button>

        ))
      }

    </div>

  );
}

export default CategoryFilter;