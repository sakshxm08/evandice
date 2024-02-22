export const setValues = (e, details, setDetails) => {
  const { name, value } = e.target;
  setDetails({ ...details, [name]: value });
};
