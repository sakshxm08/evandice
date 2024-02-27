import PropTypes from "prop-types";
import { blur_card_img } from "../assets/images/images";
import { Link } from "react-router-dom";

// Width as prop because of use of component in different sections ------------------------------------------------------
const BlurCard = ({ width = "w-full", event = [] }) => {
  // Keywords for the event - Fetched from Props ------------------------------------------------------------------------

  // Component Starts ---------------------------------------------------------------------------------------------------
  return (
    <div
      className={`${width} max-h-[96] border border-gray-700 flex items-center  gap-4 hover:gap-2 transition-all duration-500 flex-col aspect-[1/2] mobiles:aspect-[2/3] sm:aspect-[7/12]  lg:aspect-[3/5] pb-20 hover:pb-8 min-h-fit relative mx-auto rounded-2xl overflow-hidden group backdrop-blur-lg bg-blurCard`}
    >
      <img
        src={blur_card_img}
        alt="card image"
        className="w-full aspect-[1.4/1] object-cover"
      />
      <div className="flex flex-col items-center justify-center grow gap-2 md:gap-4 px-6 md:px-4 py-3">
        <h2 className="font-semibold text-lg md:text-xl text-center capitalize">
          transparency
        </h2>
        <div className="text-xs font-light text-gray-400 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi at aut
        </div>
        <div className="flex flex-col w-4/5 mx-autp -mb-28 group-hover:-mb-0 transition-all duration-500 mt-4">
          <Link
            to={`/events/${event._id}`}
            className="flex capitalize w-full text-sm to-[#8176AF] bg-gradient-to-l from-transparent bg-[#C0B7E8] hover:bg-[#3f3176] items-center justify-center rounded-full py-2 transition-all opacity-0 group-hover:opacity-100 ease-in-out duration-500"
          >
            Know more
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
