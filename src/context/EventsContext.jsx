import PropTypes from "prop-types";
import { createContext, useEffect, useReducer } from "react";
import { eventsReducer } from "../reducers/eventsReducer";
import { fetchAllData } from "../services/helperFunctions";

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
    fetchAllData(dispatch);
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
