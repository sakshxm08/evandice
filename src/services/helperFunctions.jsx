export const setValues = (e, details, setDetails) => {
  const { name, value } = e.target;
  setDetails({ ...details, [name]: value });
};

export const saveFileInputData = (e, formData, setFormData) => {
  const { name } = e.target;
  console.log(name, formData, setFormData);
};

export const handleCheck = (event, checked, setChecked, formData) => {
  var updatedList = { ...checked };
  if (event.target.checked) {
    updatedList[event.target.name].push(event.target.value);
  } else {
    updatedList[event.target.name].splice(
      checked[event.target.name].indexOf(event.target.value),
      1
    );
  }
  setChecked({ ...updatedList });
  formData[event.target.name] = updatedList[event.target.name];
};
