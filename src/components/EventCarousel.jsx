import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import EvRightArrow from "../assets/icons/EvRightArrow";
import EvLeftArrow from "../assets/icons/EvLeftArrow";
import EventCard from "./EventCard";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className={`absolute top-1/2 -right-20 h-20 -translate-y-1/2 z-20 ${
        onClick ? "cursor-pointer" : "cursor-default"
      } flex items-center justify-center`}
      onClick={onClick}
    >
      <EvRightArrow fill={onClick ? "white" : "none"} />
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className={`absolute top-1/2 -left-20 h-20 -translate-y-1/2 z-20 ${
        onClick ? "cursor-pointer" : "cursor-default"
      } flex items-center justify-center`}
      onClick={onClick}
    >
      <EvLeftArrow fill={onClick ? "white" : "none"} />
    </button>
  );
}

const EventCarousel = () => {
  const events = [];
  for (let i = 0; i < 8; i++) {
    events.push({ _id: i });
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="w-full max-w-5xl">
      <Slider {...settings}>
        {events.map((event, index) => (
          <div key={index} className="mx-auto">
            <EventCard index={index} event={event} width="w-11/12" />
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

export default EventCarousel;
