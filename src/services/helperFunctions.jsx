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
  return apiConnector(
    "GET",
    endpoints.GET_DATA.GET_EVENTS_BY_GENRE,
    null,
    null,
    {
      genre: genre,
    }
  )
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
export const fetchFestsByGenre = (genre) => {
  return apiConnector(
    "GET",
    endpoints.GET_DATA.GET_FESTS_BY_GENRE,
    null,
    null,
    {
      genre: genre,
    }
  )
    .then((response) => {
      const { festivals } = response.data;
      console.log(festivals); // Handle the response data here
      return festivals;
    })
    .catch((error) => {
      console.error("There was a problem with the request:", error);
      throw error;
    });
};
