import PropTypes from "prop-types";
const EvUserIcon = ({ fill = "#DF9438", size = 80 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60 66.6667C60 61.3624 57.8929 56.2753 54.1421 52.5246C50.3914 48.7739 45.3043 46.6667 40 46.6667C34.6957 46.6667 29.6086 48.7739 25.8579 52.5246C22.1071 56.2753 20 61.3624 20 66.6667"
        stroke={fill}
        strokeWidth="6.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40.0001 46.6667C47.3639 46.6667 53.3334 40.6971 53.3334 33.3333C53.3334 25.9695 47.3639 20 40.0001 20C32.6363 20 26.6667 25.9695 26.6667 33.3333C26.6667 40.6971 32.6363 46.6667 40.0001 46.6667Z"
        stroke={fill}
        strokeWidth="6.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40.0001 73.3334C58.4096 73.3334 73.3334 58.4096 73.3334 40.0001C73.3334 21.5906 58.4096 6.66675 40.0001 6.66675C21.5906 6.66675 6.66675 21.5906 6.66675 40.0001C6.66675 58.4096 21.5906 73.3334 40.0001 73.3334Z"
        stroke={fill}
        strokeWidth="6.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
EvUserIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number,
};
export default EvUserIcon;
