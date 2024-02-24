import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import EvRightArrow from "../assets/icons/EvRightArrow";
import EvLeftArrow from "../assets/icons/EvLeftArrow";
import EventCard from "./EventCard";

// Custom Arrows -------------------------------------------------------------------------------------------
function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className={`absolute top-1/2 left-[calc(100%+10px)] right-auto xl:left-auto xl:-right-20 h-20 -translate-y-1/2 z-20 ${
        onClick ? "cursor-pointer" : "cursor-default"
      } flex items-center justify-center`}
      onClick={onClick}
    >
      <EvRightArrow fill={onClick ? "white" : "none"} width={14} />
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className={`absolute top-1/2 right-[calc(100%+10px)] left-auto xl:right-auto xl:-left-20 h-20 -translate-y-1/2 z-20 ${
        onClick ? "cursor-pointer" : "cursor-default"
      } flex items-center justify-center`}
      onClick={onClick}
    >
      <EvLeftArrow fill={onClick ? "white" : "none"} width={14} />
    </button>
  );
}
// ----------------------------------------------------------------------------------------------------------

// Component ------------------------------------------------------------------------------------------------
const EventCarousel = () => {
  // Event for prop in event card ---------------------------------------------------------------------------
  const events = [];
  for (let i = 0; i < 8; i++) {
    events.push({ _id: i });
  }

  // Settings for Slick Carousel ----------------------------------------------------------------------------
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    // arrows: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 868,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="sm:w-5/6 w-full mx-auto max-w-5xl">
      <Slider {...settings}>
        {events.map((event, index) => (
          // mx-auto centering and w-11/12 for gap between cards -------------------------------------------
          <div key={index} className="mx-auto">
            <EventCard index={index} event={event} width="w-11/12" />
          </div>
          // -----------------------------------------------------------------------------------------------
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

export default EventCarousel;
