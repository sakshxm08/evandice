// import { useState } from "react";
// import EventCard from "./EventCard";
// import Paginate from "./Paginate";
// import BlurCard from "./BlurCard";
// import PropTypes from "prop-types";

// const EventSearches = ({ type, rows = 2 }) => {
//   const types = { NORMAL: "normal", BLUR: "blur" };
//   // Events for Pagination. Taken as prop
//   const events = [];
//   for (let i = 0; i < 28; i++) {
//     events.push("");
//   }

//   const mediaQueries = {
//     mobiles: window.matchMedia("(min-width: 500px)"),
//     sm: window.matchMedia("(min-width: 640px)"),
//     md: window.matchMedia("(min-width: 768px)"),
//     tablets: window.matchMedia("(min-width: 900px)"),
//     xl: window.matchMedia("(min-width: 1250px)"),
//   };
//   // No. of events and pages
//   const [currentPage, setCurrentPage] = useState(1);

//   const [eventsPerPage, setEventsPerPage] = useState(
//     mediaQueries.xl.matches
//       ? rows * 5
//       : mediaQueries.tablets.matches
//       ? rows * 4
//       : mediaQueries.sm.matches
//       ? rows * 3
//       : rows * 2
//   );

//   for (let i = 0; i < Object.keys(mediaQueries).length; i++) {
//     mediaQueries[Object.keys(mediaQueries)[i]].addEventListener("change", () =>
//       setEventsPerPage(
//         mediaQueries.xl.matches
//           ? rows * 5
//           : mediaQueries.tablets.matches
//           ? rows * 4
//           : mediaQueries.sm.matches
//           ? rows * 3
//           : rows * 2
//       )
//     );
//   }
//   const indexOfLastEvent = currentPage * eventsPerPage;
//   const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;

//   // Current Page Events
//   const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

//   // For setting the current page number passed as prop to Paginate Component
//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   // Functions for arrows
//   const previousPage = () => {
//     if (currentPage !== 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const nextPage = () => {
//     if (currentPage !== Math.ceil(events.length / eventsPerPage)) {
//       setCurrentPage(currentPage + 1);
//     }
//   };
//   return (
//     <>
//       {events.length > 0 ? (
//         <>
//           <div
//             className={`mx-auto:w-full grid grid-cols-2 sm:grid-cols-3 tablets:grid-cols-4 xl:grid-cols-5 gap-4 grid-rows-${rows}`}
//           >
//             {currentEvents.map((value, index) =>
//               types.NORMAL === type ? (
//                 <EventCard key={index} />
//               ) : (
//                 <BlurCard key={index} />
//               )
//             )}
//           </div>
//           <Paginate
//             eventsPerPage={eventsPerPage}
//             totalEvents={events.length}
//             paginate={paginate}
//             previousPage={previousPage}
//             nextPage={nextPage}
//             currentPage={currentPage}
//           />
//         </>
//       ) : (
//         <div className="flex items-center gap-4 w-full">
//           <div className="w-full h-[0.5px] bg-gray-500"></div>
//           <h2 className="text-2xl font-semibold uppercase text-gray-500 py-10 w-full flex items-center justify-center">
//             No events to display
//           </h2>
//           <div className="w-full h-[0.5px] bg-gray-500"></div>
//         </div>
//       )}
//     </>
//   );
// };

// EventSearches.propTypes = {
//   type: PropTypes.string,
//   rows: PropTypes.number,
// };
// export default EventSearches;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import EvRightArrow from "../assets/icons/EvRightArrow";
import EvLeftArrow from "../assets/icons/EvLeftArrow";
import EventCard from "./EventCard";
import BlurCard from "./BlurCard";
import { useState } from "react";

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
const EventSearches = ({ type = "normal" }) => {
  const [currSlide, setCurrSlide] = useState(0);

  const types = { NORMAL: "normal", BLUR: "blur" };
  // Event for prop in event card ---------------------------------------------------------------------------
  const events = [];
  for (let i = 0; i < 10; i++) {
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
    beforeChange: (prev, next) => {
      setCurrSlide(next / 2);
    },
    appendDots: (dots) => (
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
          transform: "translateY(8px)",
        }}
      >
        {" "}
        {dots}{" "}
      </ul>
    ),
    customPaging: (i) => (
      <span
        className={`text-sm ${
          currSlide === i && "bg-white text-black"
        } hover:bg-white  hover:text-black transition-all select-none cursor-pointer rounded-full flex items-center justify-center p-1 w-6 h-6`}
      >
        {i + 1}
      </span>
    ),
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
    <div className="sm:w-5/ w-full mx-auto max-w-5xl">
      {events.length > 0 ? (
        <Slider {...settings}>
          {events.map((event, index) => (
            // mx-auto centering and w-11/12 for gap between cards -------------------------------------------
            <div key={index} className="mx-auto">
              {types.NORMAL === type ? (
                <EventCard key={index} event={event} width="w-11/12" />
              ) : (
                <BlurCard key={index} width="w-11/12" />
              )}
            </div>
            // -----------------------------------------------------------------------------------------------
          ))}
        </Slider>
      ) : (
        <div className="flex items-center gap-4 w-full">
          <div className="w-full h-[0.5px] bg-gray-500"></div>
          <h2 className="text-2xl font-semibold uppercase text-gray-500 py-10 w-full flex items-center justify-center">
            No events to display
          </h2>
          <div className="w-full h-[0.5px] bg-gray-500"></div>
        </div>
      )}
    </div>
  );
};

NextArrow.propTypes = {
  onClick: PropTypes.func,
};
PrevArrow.propTypes = {
  onClick: PropTypes.func,
};
EventSearches.propTypes = {
  type: PropTypes.string,
};
export default EventSearches;
