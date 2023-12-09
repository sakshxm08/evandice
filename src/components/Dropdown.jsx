import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

const Dropdown = ({ isEditable, type, value, setValue, values }) => {
  const dropdownRef = useRef(null);
  const dropdownMenu = useRef(null);

  const [dropdown, setDropdown] = useState(false);

  document.addEventListener("mousedown", (e) => {
    if (
      dropdownMenu.current &&
      dropdown &&
      !dropdownMenu.current.contains(e.target)
    ) {
      setDropdown(false);
      dropdownRef.current.classList.remove("-rotate-180");
      dropdownMenu.current.classList.add("scale-y-0");
      dropdownMenu.current.classList.remove("scale-y-100");
    }
  });

  return (
    <>
      <label htmlFor={type} className="text-yellow text-sm">
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </label>
      <div className="relative">
        <div
          className={`${
            !isEditable
              ? "text-gray-500 cursor-default border-gray-600"
              : value
              ? "text-white cursor-pointer"
              : "text-gray-400 cursor-pointer"
          } relative w-full border h-[42px] px-4 outline-none rounded flex items-center`}
          onClick={() => {
            if (isEditable) {
              setDropdown(!dropdown);
              dropdownRef.current.classList.toggle("-rotate-180");
              dropdownMenu.current.classList.toggle("scale-y-0");
              dropdownMenu.current.classList.toggle("scale-y-100");
            }
          }}
        >
          {value ? value : "Select"}

          <div
            ref={dropdownRef}
            className="absolute right-1  top-[10px] transition-all w-fit h-fit duration-300 "
          >
            <MdArrowDropDown className="text-xl" />
          </div>
        </div>
        <div>
          <input
            type="checkbox"
            name="dropdown"
            checked={dropdown}
            disabled={!isEditable}
            hidden
            onChange={(e) => {
              setDropdown(e.target.value);
            }}
          />
          <div
            className="flex scale-y-0 flex-col max-h-72 z-20 overflow-scroll shadow-xl rounded absolute top-[48px]  w-full bg-black border origin-top transition-all duration-300"
            ref={dropdownMenu}
          >
            {values.map((gender, index) => (
              <span
                className="py-2 px-4 cursor-pointer hover:bg-gray-700/70 text-white transition-all"
                onClick={() => {
                  setValue(gender);
                  dropdownMenu.current.classList.toggle("scale-y-0");
                  dropdownMenu.current.classList.toggle("scale-y-100");

                  dropdownRef.current.classList.toggle("-rotate-180");
                }}
                key={index}
              >
                {gender}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

Dropdown.propTypes = {
  isEditable: PropTypes.bool,
  value: PropTypes.string,
  type: PropTypes.string,
  setValue: PropTypes.func,
  values: PropTypes.array,
};

export default Dropdown;
