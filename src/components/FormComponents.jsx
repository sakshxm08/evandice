import PropTypes from "prop-types";

export const Label = ({ value, htmlFor, className }) => (
  <label htmlFor={htmlFor} className={"text-yellow text-sm" + className}>
    {value}
  </label>
);

export const InputText = ({
  type = "text",
  name,
  id,
  onChange,
  disabled = false,
  value,
}) => (
  <input
    type={type}
    className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 disabled:cursor-not-allowed outline-none focus-visible:border-yellow"
    name={name}
    id={id}
    onChange={onChange}
    disabled={disabled}
    value={value}
  />
);

export const InputRadio = ({
  name,
  id,
  onChange,
  disabled = false,
  value,
  checked = false,
  label,
}) => (
  <div className="flex gap-2 items-center">
    <input
      type="radio"
      id={id}
      name={name}
      className="accent-yellow"
      onChange={onChange}
      checked={checked}
      value={value}
      disabled={disabled}
    />
    <label htmlFor={id} className="capitalize">
      {label}
    </label>
  </div>
);
Label.propTypes = {
  htmlFor: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
};
InputText.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  value: PropTypes.string,
};
InputRadio.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
};
