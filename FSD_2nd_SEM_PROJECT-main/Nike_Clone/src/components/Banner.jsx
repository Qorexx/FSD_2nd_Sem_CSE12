const banners = [

  {
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1800&auto=format&fit=crop",

    link: "https://www.nike.com/in/w/running-shoes-37v7jzy7ok"
  },

  {
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1800&auto=format&fit=crop",

    link: "https://www.nike.com/in/w/basketball-shoes-3glsmzy7ok"
  },

  {
    img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1800&auto=format&fit=crop",

    link: "https://www.nike.com/in/w/lifestyle-shoes-13jrmznik1zy7ok"
  }

];

function Banner({
  slide,
  setSlide
}) {

  return (

    <div className="banner">

      {
        banners.map((banner, i) => (

          <a
            key={i}
            href={banner.link}
            target="_blank"
            rel="noreferrer"
            className={
              i === slide
              ? "banner-link active"
              : "banner-link"
            }
          >

            <img
              src={banner.img}
              alt="Nike Banner"
              className="banner-img"
            />

          </a>

        ))
      }

      <button
        className="banner-arrow left"
        onClick={() =>
          setSlide(
            (slide - 1 + banners.length)
            %
            banners.length
          )
        }
      >
        ❮
      </button>

      <button
        className="banner-arrow right"
        onClick={() =>
          setSlide(
            (slide + 1)
            %
            banners.length
          )
        }
      >
        ❯
      </button>

    </div>

  );
}

export default Banner;