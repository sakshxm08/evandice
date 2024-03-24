import PropTypes from "prop-types";
import { createContext, useReducer, useEffect } from "react";
import { eventsReducer } from "../reducers/eventsReducer";
import { apiConnector } from "../services/apiConnector";
import { endpoints } from "../services/apiRoutes";
import {
  fetchEventsByGenre,
  fetchFestsByGenre,
} from "../services/helperFunctions";

export const EventsContext = createContext();

export const EventsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(eventsReducer, {
    all_events: [],
    featured_events: [],
    events_by_genre: {},
    select_tags: [],
    relevant_depts: [],
    all_genres: [],
    events_promise_resolved: false,
  });

  useEffect(() => {
    const fetchData = async () => {
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
        dispatch({ type: "SET_LOADING", payload: true });

        // Further processing or error handling if needed
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <EventsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </EventsContext.Provider>
  );
};

EventsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
