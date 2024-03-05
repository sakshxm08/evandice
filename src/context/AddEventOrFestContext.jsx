import PropTypes from "prop-types";
import { createContext, useReducer } from "react";
import { addEventOrFestReducer } from "../reducers/addEventOrFestReducer";

export const AddEventOrFestContext = createContext();

export const AddEventOrFestContextProvider = ({ children }) => {
  // Radio Button states not saved after submit and then back.
  const [state, dispatch] = useReducer(addEventOrFestReducer, {
    fest: {
      festName: "",
      dates: { startDate: null, endDate: null },
      address: "",
      state: "",
      city: "",
      googleMapsLink: "",
      contactNumber: "",
      festType: "",
      accomodationProvided: null,
      festGenre: [],
      relevantCollegeDepartment: [],
      mainPoster: null,
      pictures: [],
      instagramLink: "",
      facebookLink: "",
      twitterLink: "",
      festSponsor: [],
      festFoodStalls: [],
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
      eventGenre: [],
      relevantCollegeDepartment: [],
      mainPoster: null,
      pictures: [],
      instagramLink: "",
      facebookLink: "",
      twitterLink: "",
      eventSponsor: [],
      eventFoodStalls: [],
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
    <AddEventOrFestContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AddEventOrFestContext.Provider>
  );
};

AddEventOrFestContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
