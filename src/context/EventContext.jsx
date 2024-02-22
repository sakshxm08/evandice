import PropTypes from "prop-types";
import { createContext, useReducer } from "react";
import { eventReducer } from "../reducers/eventReducer";

export const EventContext = createContext();

export const EventContextProvider = ({ children }) => {
  // Radio Button states not saved after submit and then back.
  const [state, dispatch] = useReducer(eventReducer, {
    fest: {
      festName: "",
      dates: { startDate: null, endDate: null },
      address: "",
      state: "",
      city: "",
      googleMapsLink: "",
      contactNumber: "",
      festType: "",
      relevantCollegeDepartment: [],
      selectTags: [],
      accomodationProvided: null,
      instagramLink: "",
      facebookLink: "",
      twitterLink: "",
      festSponsor: "",
      festFoodStalls: "",
      festAccomodation: "",
      registrationFees: null,
      poc_name: "",
      poc_contact: "",
      poc_email: "",
    },
    event: {
      eventName: "",
      dates: { startDate: null, endDate: null },
      address: "",
      state: "",
      city: "",
      googleMapsLink: "",
      contactNumber: "",
      eventType: null,
      accomodationProvided: null,
      relevantCollegeDepartment: [],
      selectTags: [],
      instagramLink: "",
      facebookLink: "",
      twitterLink: "",
      eventSponsor: "",
      eventFoodStalls: "",
      eventAccomodation: "",
      registrationFees: null,
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
