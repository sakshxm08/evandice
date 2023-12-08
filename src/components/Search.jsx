import { useRef } from "react";
import PropTypes from "prop-types";
import EvLeftArrow from "../assets/icons/EvLeftArrow";
import EvRightArrow from "../assets/icons/EvRightArrow";
import EvSearch from "../assets/icons/EvSearch";

const Search = ({ searches = [] }) => {
  const suggestions = useRef();

  const left_click = () => {
    suggestions.current.scrollTo({
      left: suggestions.current.scrollLeft - 350,
      behavior: "smooth",
    });
  };

  const right_click = () => {
    suggestions.current.scrollTo({
      left: suggestions.current.scrollLeft + 350,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full grid grid-cols-12 py-6 gap-10">
      <div className="relative col-span-5 w-full">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent caret-primary border font-light text-gray-200 placeholder:text-gray-500 text-lg border-gray-400  rounded-full px-4 pl-14 py-2 w-full focus:border-primary outline-none"
        />
        <span className="absolute left-0 flex items-center justify-center top-0 h-full px-4">
          <EvSearch size={28} stroke="gray" />
        </span>
      </div>
      <div className="relative flex justify-between items-center gap-4 col-span-7">
        <span
          onClick={left_click}
          className="rounded-full aspect-square h-8 border border-transparent flex items-center justify-center cursor-pointer hover:border-gray-200 transition-all"
        >
          <EvLeftArrow width={8} />
        </span>

        <div
          ref={suggestions}
          className="flex items-center gap-2 overflow-x-scroll w-full flex-nowrap snap-mandatory scroll-p-2 search-suggestions"
        >
          {searches.map((search, index) => (
            <span
              key={index}
              className="rounded-full px-6 py-1 texsm font-medium border border-white snap-start snap-always hover:bg-white hover:text-black transition-all cursor-pointer"
            >
              {search}
            </span>
          ))}
        </div>
        <span
          onClick={right_click}
          className="rounded-full aspect-square h-8 border border-transparent flex items-center justify-center cursor-pointer hover:border-gray-200 transition-all"
        >
          <EvRightArrow width={8} />
        </span>
      </div>
    </div>
  );
};

Search.propTypes = {
  searches: PropTypes.array,
};

export default Search;
