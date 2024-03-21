import { apiConnector } from "./apiConnector";
import { endpoints } from "./apiRoutes";

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

export const fetchEventsByGenre = (genre) => {
  return apiConnector("get", endpoints.EVENTS.GET_BY_GENRE, null, null, {
    genre: genre,
  })
    .then((response) => {
      const { events } = response.data;
      console.log(events); // Handle the response data here
      return events;
    })
    .catch((error) => {
      console.error("There was a problem with the request:", error);
      throw error;
    });
};
