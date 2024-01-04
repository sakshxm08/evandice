import PropTypes from "prop-types";
import { createContext, useReducer } from "react";
import { eventReducer } from "../reducers/eventReducer";

export const EventContext = createContext();

export const EventContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(eventReducer, {
    fest: {
      name: "",
      dates: "",
      address: "",
      state: "",
      city: "",
      gmap_link: "",
      contact_no: "",
      type: null,
      depts: [],
      instagram: "",
      facebook: "",
      twitter: "",
      sponsors: "",
      foodstalls: "",
      accomodations: "",
      registerfees: null,
      poc_name: "",
      poc_contact: "",
      poc_email: "",
    },
    event: {
      name: "",
      dates: "",
      address: "",
      state: "",
      city: "",
      gmap_link: "",
      contact_no: "",
      type: null,
      accomodation: null,
      depts: [],
      instagram: "",
      facebook: "",
      twitter: "",
      sponsors: "",
      foodstalls: "",
      accomodations: "",
      registerfees: null,
      desc: "",
      winner: "",
      participant: "",
      certificates: null,
      email: "",
    },
  });

  return (
    <EventContext.Provider value={{ ...state, dispatch }}>
      {children}
    </EventContext.Provider>
  );
};

EventContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
