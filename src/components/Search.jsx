import EvLeftArrow from "../assets/icons/EvLeftArrow";
import EvRightArrow from "../assets/icons/EvRightArrow";
import EvSearch from "../assets/icons/EvSearch";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import PropTypes from "prop-types";

const Search = () => {
  const searches = [
    "Sports",
    "Music",
    "Fest",
    "Movies",
    "Food",
    "Competitions",
    "Hackathons",
    "Fest",
    "Movies",
    "Food",
    "Competitions",
    "Hackathons",
  ];

  //   const settings = {
  //     nextArrow: <NextArrow />,
  //     prevArrow: <PrevArrow />,
  //     className: "slider variable-width",
  //     dots: false,
  //     infinite: false,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     speed: 500,
  //     variableWidth: true,
  //   };
  return (
    <div className="w-full grid grid-cols-12 py-6 gap-10">
      <div className="relative col-span-5 w-full">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent border font-light text-gray-200 placeholder:text-gray-500 text-lg border-gray-400  rounded-full px-4 pl-14 py-2 w-full focus:border-primary outline-none"
        />
        <span className="absolute left-0 flex items-center justify-center top-0 h-full px-4">
          <EvSearch size={28} stroke="gray" />
        </span>
      </div>
      <div className="relative flex justify-between items-center gap-4 col-span-7">
        <span className="rounded-full aspect-square h-8 border border-transparent flex items-center justify-center cursor-pointer hover:border-gray-200 transition-all">
          <EvLeftArrow width={8} />
        </span>
        <div className="flex items-center gap-2 overflow-x-scroll w-full flex-nowrap snap-mandatory scroll-p-2 search-suggestions overscroll-contain">
          {searches.map((search, index) => (
            <span
              key={index}
              className="rounded-full px-6 py-1 texsm font-medium border border-white snap-start snap-always hover:bg-white hover:text-black transition-all cursor-pointer"
            >
              {search}
            </span>
          ))}
        </div>
        <span className="rounded-full aspect-square h-8 border border-transparent flex items-center justify-center cursor-pointer hover:border-gray-200 transition-all">
          <EvRightArrow width={8} />
        </span>
      </div>
      {/* <div className="relative  col-span-7 h-full">
        <Slider {...settings}>
          {searches.map((search, index) => (
            <div key={index}>
              <span className="rounded-full px-6 py-1 text-sm font-medium border border-white hover:bg-white hover:text-black transition-all cursor-pointer">
                {search}
              </span>
            </div>
          ))}
        </Slider>
      </div> */}
    </div>
  );
};

// function NextArrow(props) {
//   const { onClick } = props;
//   return (
//     <button
//       className={`absolute top-1/2 -right-8 -translate-y-1/2 z-20 ${
//         onClick ? "cursor-pointer" : "cursor-default"
//       } flex items-center justify-center`}
//       onClick={onClick}
//     >
//       <EvRightArrow fill={onClick ? "white" : "gray"} width={8} />
//     </button>
//   );
// }

// function PrevArrow(props) {
//   const { onClick } = props;
//   return (
//     <button
//       className={`absolute top-1/2 -left-8 -translate-y-1/2 z-20 ${
//         onClick ? "cursor-pointer" : "cursor-default"
//       } flex items-center justify-center`}
//       onClick={onClick}
//     >
//       <EvLeftArrow fill={onClick ? "white" : "gray"} width={8} />
//     </button>
//   );
// }

// NextArrow.propTypes = {
//   onClick: PropTypes.func,
// };
// PrevArrow.propTypes = {
//   onClick: PropTypes.func,
// };
export default Search;
