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

export const fetchEventsByGenre = async (genre) => {
  try {
    const response = await apiConnector(
      "GET",
      endpoints.GET_DATA.GET_EVENTS_BY_GENRE,
      null,
      null,
      {
        genre: genre,
      }
    );
    const { events } = response.data;
    console.log(events); // Handle the response data here
    return events;
  } catch (error) {
    console.error("There was a problem with the request:", error);
    throw error;
  }
};
export const fetchFestsByGenre = async (genre) => {
  try {
    const response = await apiConnector(
      "GET",
      endpoints.GET_DATA.GET_FESTS_BY_GENRE,
      null,
      null,
      {
        genre: genre,
      }
    );
    const { festivals } = response.data;
    console.log(festivals); // Handle the response data here
    return festivals;
  } catch (error) {
    console.error("There was a problem with the request:", error);
    throw error;
  }
};

export const fetchAllData = async (dispatch) => {
  dispatch({ type: "SET_PROMISE_RESOLVED", payload: false });
  try {
    // Fetch latest events
    const latestEvents = await apiConnector(
      "GET",
      endpoints.GET_DATA.GET_UPC_AND_LIVE
    ).then((res) => res.data);

    // Fetch additional events
    const additionalEvents = await fetchEventsByGenre().then((events) => {
      return events;
    });
    const additionalFests = await fetchFestsByGenre().then((fests) => {
      return fests;
    });

    // Fetch events by genre
    const genres = ["dance", "music", "comedy", "art", "sports", "food"];
    const genreEventsPromises = genres.map((genre) =>
      fetchEventsByGenre(genre).then((events) => ({ [genre]: events }))
    );

    // Execute all promises in parallel
    const [
      latestEventsResponse,
      allEvents,
      allFests,
      ...eventsByGenreResponses
    ] = await Promise.all([
      latestEvents,
      additionalEvents,
      additionalFests,
      ...genreEventsPromises,
    ]);

    // Dispatch actions to update context state
    dispatch({
      type: "SET_FEATURED_EVENTS",
      payload: latestEventsResponse,
    });
    dispatch({
      type: "SET_EVENTS_BY_GENRE",
      payload: eventsByGenreResponses,
    });
    dispatch({ type: "SET_ALL_EVENTS", payload: allEvents });
    dispatch({ type: "SET_ALL_FESTS", payload: allFests });

    // Further processing or error handling if needed
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    dispatch({ type: "SET_PROMISE_RESOLVED", payload: true });
  }
};
