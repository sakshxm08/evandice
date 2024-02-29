import { hero_img_1, hero_img_2, hero_img_3 } from "../assets/images/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import EvLeftArrow from "../assets/icons/EvLeftArrow";
import EvRightArrow from "../assets/icons/EvRightArrow";
import PropTypes from "prop-types";
import { useState } from "react";

// Custom Arrows for Slick Carousel ------------------------------------------------------------------

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-20 h-min -translate-y-1/2 z-20 cursor-pointer"
      onClick={onClick}
    >
      <EvRightArrow />
    </div>
  );
}
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-20 h-min -translate-y-1/2 z-20 cursor-pointer"
      onClick={onClick}
    >
      <EvLeftArrow />
    </div>
  );
}
// -------------------------------------------------------------------------------------------------

// Carousel Component ------------------------------------------------------------------------------
const Carousel = () => {
  const [currSlide, setCurrSlide] = useState(0);

  // Custom Dots Styling ---------------------------------------------------------------------------
  const active = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    outline: "0",
    width: "24px",
    height: "6px",
    borderRadius: "100px",
  };
  const inactive = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    outline: "0",
    width: "6px",
    height: "6px",
    borderRadius: "100%",
  };
  // -----------------------------------------------------------------------------------------------

  // Slick Carousel Settings -----------------------------------------------------------------------
  const settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    slidesToScroll: 1,
    // To determine the Current Slide
    beforeChange: (prev, next) => {
      setCurrSlide(next);
    },
    // Setting Custom Dots
    customPaging: (index) => {
      return (
        <button
          className="-mt-16 tablets:-mt-28 xl:-mt-36 !p-0 mx-auto transition-all duration-500 origin-center"
          style={index === currSlide ? active : inactive}
        >
          {index + 1}
        </button>
      );
    },
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  // -------------------------------------------------------------------------------------------------

  // Carousel Images and Content for easy access to Carousel Mapping ---------------------------------
  const carousel_data = [
    {
      desc: (
        <div className="flex flex-col items-center justify-center gap-6 lg:gap-8">
          <div className="flex flex-col  text-4xl xl:text-7xl md:text-5xl items-center justify-center font-bold text-white drop-shadow-2xl">
            <div>
              Joy at our <span className="text-primary">Oasis</span>.
            </div>
          </div>
          <div className="flex justify-center items-center max-w-xl text-center text-white text-sm md:text-base lg:text-lg font-light px-8">
            Join us for a fun-filled festival celebrating [theme of the
            festival] with live music, delicious food, and exciting activities
            for all ages. Don&apos;t miss out on this chance to create lasting
            memories with your friends and family!
          </div>
          <button className=" uppercase text-sm px-4 py-2 font-medium text-black bg-primary outline outline-1 outline-primary/70 outline-offset-2 hover:scale-105 hover:outline-offset-0 transition-all">
            register now
          </button>
        </div>
      ),

      alt: "register",
      src: hero_img_1,
    },
    {
      desc: (
        <div className="flex flex-col items-center justify-center gap-6 lg:gap-8">
          <div className="flex flex-col  text-4xl xl:text-7xl md:text-5xl items-center justify-center font-bold text-white drop-shadow-2xl">
            <div>
              Joy at our <span className="text-primary">Oasis</span>.
            </div>
          </div>
          <div className="flex justify-center items-center max-w-xl text-center text-white text-sm md:text-base lg:text-lg font-light px-8">
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </div>
          <button className=" uppercase text-sm px-4 py-2 font-medium text-black bg-primary outline outline-1 outline-primary/70 outline-offset-2 hover:scale-105 hover:outline-offset-0 transition-all">
            register now
          </button>
        </div>
      ),

      alt: "register",
      src: hero_img_2,
    },
    {
      desc: (
        <div className="flex flex-col items-center justify-center gap-6 lg:gap-8">
          <div className="flex flex-col text-4xl xl:text-7xl md:text-5xl items-center justify-center font-bold text-white drop-shadow-2xl">
            <div>
              Joy at our <span className="text-primary">Oasis</span>.
            </div>
          </div>
          <div className="flex justify-center items-center max-w-xl text-center text-white text-sm md:text-base lg:text-lg font-light px-8">
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </div>
          <button className=" uppercase text-sm px-4 py-2 font-medium text-black bg-primary outline outline-1 outline-primary/70 outline-offset-2 hover:scale-105 hover:outline-offset-0 transition-all">
            register now
          </button>
        </div>
      ),

      alt: "register",
      src: hero_img_3,
    },
  ];
  // ----------------------------------------------------------------------------------------------------

  // Returning the carousel -----------------------------------------------------------------------------
  return (
    <div className=" min-h-[320px] md:min-h-0 md:min-w-screen md:aspect-video overflow-hidden relative">
      <Slider className="h-full" {...settings}>
        {carousel_data.map((slide) => (
          <div
            key={slide.alt}
            className="relative min-h-[320px] md:min-h-0  md:min-w-screen md:aspect-video"
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full min-h-[320px] md:min-h-0 h-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-black/60 w-full h-full flex items-center justify-center flex-col">
              {slide.desc}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

NextArrow.propTypes = {
  onClick: PropTypes.func,
};
PrevArrow.propTypes = {
  onClick: PropTypes.func,
};

export default Carousel;
