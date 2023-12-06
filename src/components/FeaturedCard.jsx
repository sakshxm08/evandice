import PropTypes from "prop-types";
import { card_img } from "../assets/images/images";
import { Link } from "react-router-dom";
const FeaturedCard = () => {
  const keywords = ["live", "trending"];
  return (
    <div className="w-11/12 h-96 relative mx-auto rounded-2xl overflow-hidden group">
      <img
        src={card_img}
        alt=""
        className="object-cover h-full -z-20 absolute top-0 group-hover:scale-110 transition-all"
      />
      <div className="relative h-full w-full bg-gradient-to-t text-sm from-black to-transparent flex flex-col justify-end p-4 gap-2">
        <div className="absolute top-2 right-2 flex flex-col items-center justify-center p-1 gap-0 rounded-2xl bg-white/70 aspect-square h-16 text-black">
          <span className="text-2xl font-bold">22</span>
          <span className="text-sm uppercase font-light">oct</span>
        </div>
        <div className="flex flex-wrap gap-2 items-center justify-center">
          {keywords.slice(0, 3).map((keyword, index) => (
            <span
              key={{ index }}
              className="rounded-full text-xs uppercase py-1 px-4 border font-medium hover:bg-white transition-all hover:text-black cursor-pointer"
            >
              {keyword}
            </span>
          ))}
          {keywords.length > 3 && (
            <span className="rounded-full text-xs py-1 px-4 border border-green-600 text-green-600 font-medium hover:bg-green-600 transition-all hover:text-white cursor-pointer">
              more...
            </span>
          )}
        </div>
        <h2 className="font-bold text-2xl text-center">Neon Da Vista</h2>
        <div className="flex justify-around font-semibold">
          <span>Pilani</span>
          <span className=" text-green-600">Rs. 3400</span>
        </div>
        <Link className="border flex items-center justify-center rounded-full py-2 hover:bg-white transition-all hover:text-black">
          Get Now
        </Link>
      </div>
    </div>
  );
};

FeaturedCard.propTypes = {
  index: PropTypes.number,
};
export default FeaturedCard;
