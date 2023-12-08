import PropTypes from "prop-types";
import EvLeftArrow from "../assets/icons/EvLeftArrow";
import EvRightArrow from "../assets/icons/EvRightArrow";
import { useEffect, useState } from "react";
const Paginate = ({
  eventsPerPage,
  totalEvents,
  paginate,
  previousPage,
  nextPage,
  currentPage,
}) => {
  const [arr, setArr] = useState([]);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalEvents / eventsPerPage); i++) {
    pageNumbers.push(i);
  }

  const totalPages = Math.ceil(totalEvents / eventsPerPage);
  useEffect(() => {
    setArr([
      currentPage === 3
        ? currentPage
        : currentPage === totalPages - 2
        ? currentPage - 2
        : currentPage - 1,
      currentPage === 3
        ? currentPage + 1
        : currentPage === totalPages - 2
        ? currentPage - 1
        : currentPage,
      currentPage === 3
        ? currentPage + 2
        : currentPage === totalPages - 2
        ? currentPage
        : currentPage + 1,
    ]);
  }, [currentPage, totalPages]);

  return (
    <div
      className={`flex ${
        totalPages > 10 ? "w-[420px]" : "gap-4"
      } items-center justify-between`}
    >
      <span
        onClick={previousPage}
        className={`${
          currentPage !== 1 && "hover:border-white cursor-pointer"
        } border border-transparent rounded-full h-8 w-8 flex items-center justify-center`}
      >
        <EvLeftArrow width={8} fill={currentPage === 1 ? "none" : "white"} />
      </span>
      <ul className="flex gap-4 items-center justify-center relative">
        {pageNumbers
          .slice(0, totalPages > 10 ? 2 : totalPages)
          .map((number) => (
            <li
              key={number}
              className={`text-sm ${
                currentPage === number && "bg-white text-black"
              } hover:bg-white hover:text-black transition-all select-none cursor-pointer rounded-full flex items-center justify-center p-1 w-6 h-6`}
              onClick={() => paginate(number)}
            >
              {number}
            </li>
          ))}

        {totalPages > 10 && (
          <>
            {![1, 2, totalPages, totalPages - 1].includes(currentPage) ? (
              <>
                {currentPage !== 3 && currentPage !== 4 && <span>. . .</span>}
                {arr.map((number) => (
                  <li
                    key={number}
                    className={`text-sm ${
                      currentPage === number && "bg-white text-black"
                    } hover:bg-white hover:text-black transition-all bg-transparent select-none cursor-pointer rounded-full flex items-center justify-center p-1 w-6 h-6`}
                    onClick={() => paginate(number)}
                  >
                    {number}
                  </li>
                ))}
                {currentPage !== totalPages - 2 &&
                  currentPage !== totalPages - 3 && <span>. . .</span>}
              </>
            ) : (
              <span>. . .</span>
            )}
            {[totalPages - 1, totalPages].map((number) => (
              <li
                key={number}
                className={`text-sm ${
                  currentPage === number && "bg-white text-black"
                } hover:bg-white hover:text-black transition-all bg-transparent select-none cursor-pointer rounded-full flex items-center justify-center p-1 w-6 h-6`}
                onClick={() => paginate(number)}
              >
                {number}
              </li>
            ))}
          </>
        )}
      </ul>
      <span
        onClick={nextPage}
        className={`${
          currentPage !== totalPages && "hover:border-white cursor-pointer"
        } border border-transparent rounded-full h-8 w-8 flex items-center justify-center`}
      >
        <EvRightArrow
          width={8}
          fill={currentPage === totalPages ? "none" : "white"}
        />
      </span>
    </div>
  );
};
Paginate.propTypes = {
  eventsPerPage: PropTypes.number,
  totalEvents: PropTypes.number,
  paginate: PropTypes.func,
  previousPage: PropTypes.func,
  nextPage: PropTypes.func,
  currentPage: PropTypes.number,
};
export default Paginate;
