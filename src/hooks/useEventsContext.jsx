import { useContext } from "react";
import { EventsContext } from "../context/EventsContext";

export const useEventsContext = () => {
  const context = useContext(EventsContext);

  if (!context)
    throw Error(
      "useEventsContext mush be wrapped inside an EventsContextProvider"
    );
  return context;
};
