import PropTypes from "prop-types";
const EvSearch = ({ size = 45, stroke = "white" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.8544 35.1907C28.9582 35.1907 35.5277 28.6212 35.5277 20.5174C35.5277 12.4136 28.9582 5.84412 20.8544 5.84412C12.7506 5.84412 6.18115 12.4136 6.18115 20.5174C6.18115 28.6212 12.7506 35.1907 20.8544 35.1907Z"
        stroke={stroke}
        strokeWidth="1.54455"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39.196 38.8589L31.3091 30.972"
        stroke={stroke}
        strokeWidth="1.54455"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

EvSearch.propTypes = {
  size: PropTypes.number,
  stroke: PropTypes.string,
};

export default EvSearch;
