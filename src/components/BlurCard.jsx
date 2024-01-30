import PropTypes from "prop-types";
import { card_img } from "../assets/images/images";
import { Link } from "react-router-dom";

// Width as prop because of use of component in different sections ------------------------------------------------------
const BlurCard = ({ width = "w-full", event = [] }) => {
  // Keywords for the event - Fetched from Props ------------------------------------------------------------------------
  const keywords = ["live", "trending", "paid", "fest"];

  // Component Starts ---------------------------------------------------------------------------------------------------
  return (
    <div
      className={`${width} max-h-96 aspect-[3/5] relative mx-auto rounded-2xl overflow-hidden group`}
    >
      <img
        src={card_img}
        alt=""
        className="object-cover h-full -z-20 absolute top-0 group-hover:scale-110 transition-all duration-500"
      />
      <div className="h-full w-full transition-all group-hover:bg-black/40 absolute inset-0"></div>
      <div className="relative h-full w-full bg-gradient-to-t text-sm from-black to-transparent transition-all flex flex-col justify-end p-4 gap-2">
        <div className="absolute top-2 right-2 flex flex-col items-center justify-center p-1 gap-0 rounded-2xl bg-white/70 aspect-square h-16 text-black">
          <span className="text-2xl font-bold">22</span>
          <span className="text-sm uppercase font-light">oct</span>
        </div>
        <div className="flex flex-wrap gap-2 items-center justify-center overflow-hidden mt-[150%] duration-500 opacity-0 group-hover:opacity-100 group-hover:mt-0 transition-all ease-in-out">
          {/* Keywords greater than 3 are sliced */}
          {keywords.slice(0, 3).map((keyword, index) => (
            <span
              key={index}
              className="rounded-full text-xs uppercase py-1 px-4 border font-medium hover:bg-white transition-all hover:text-black cursor-pointer"
            >
              {keyword}
            </span>
          ))}

          {/* More keywords open the event page */}
          {keywords.length > 3 && (
            <Link
              to={`/events/${event._id}`}
              className="rounded-full text-xs py-1 px-4 border border-green-600 text-green-600 font-medium hover:bg-green-600 transition-all hover:text-white cursor-pointer"
            >
              more...
            </Link>
          )}
        </div>
        <h2 className="font-bold text-2xl text-center">Neon Da</h2>
        <div className="flex justify-around font-semibold">
          <span>Pilani</span>
          <span className=" text-green-600">Rs. 3400</span>
        </div>
        <div className="flex flex-col justify-end gap-2 overflow-hidden">
          <Link
            to={`/events/${event._id}`}
            className="border flex items-center justify-center rounded-full py-2 hover:bg-white transition-all hover:text-black  opacity-0 group-hover:opacity-100 ease-in-out  duration-500"
          >
            Get Now
          </Link>
        </div>
      </div>
    </div>
  );
};

BlurCard.propTypes = {
  width: PropTypes.string,
  event: PropTypes.object,
};
export default BlurCard;
