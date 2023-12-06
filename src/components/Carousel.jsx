import { hero_img_1, hero_img_2, hero_img_3 } from "../assets/images/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import EvLeftArrow from "../assets/icons/EvLeftArrow";
import EvRightArrow from "../assets/icons/EvRightArrow";
import PropTypes from "prop-types";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-20 h-20 -translate-y-1/2 z-20 cursor-pointer"
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
      className="absolute top-1/2 left-20 h-20 -translate-y-1/2 z-20 cursor-pointer"
      onClick={onClick}
    >
      <EvLeftArrow />
    </div>
  );
}

const Carousel = () => {
  const settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    pauseOnHover: true,
  };
  const carousel_data = [
    {
      desc: (
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="flex flex-col font-titleFont text-7xl items-center justify-center font-bold text-white drop-shadow-2xl">
            <div>
              Joy at our <span className="text-primary">Oasis</span>.
            </div>
            <div>
              Dump <span className="text-primary">your ex</span>.
            </div>
          </div>
          <div className="flex justify-center items-center max-w-xl text-center text-white text-lg font-light">
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.
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
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="flex flex-col font-titleFont text-7xl items-center justify-center font-bold text-white drop-shadow-2xl">
            <div>
              Joy at our <span className="text-primary">Oasis</span>.
            </div>
            <div>
              Dump <span className="text-primary">your ex</span>.
            </div>
          </div>
          <div className="flex justify-center items-center max-w-xl text-center text-white text-lg font-light">
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.
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
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="flex flex-col font-titleFont text-7xl items-center justify-center font-bold text-white drop-shadow-2xl">
            <div>
              Joy at our <span className="text-primary">Oasis</span>.
            </div>
            <div>
              Dump <span className="text-primary">your ex</span>.
            </div>
          </div>
          <div className="flex justify-center items-center max-w-xl text-center text-white text-lg font-light">
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.
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
  const renderSlides = carousel_data.map((slide) => (
    <div key={slide.alt} className="relative h-screen">
      <img
        src={slide.src}
        alt={slide.alt}
        className="absoluteinset-0 w-screen object-fit object-bottom"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-black/60 w-full h-full flex items-center justify-center flex-col">
        {slide.desc}
      </div>
    </div>
  ));
  return (
    <div className="h-screen overflow-hidden">
      <Slider className="h-full" {...settings}>
        {renderSlides}
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
