import { useContext } from "react";
import { EventContext } from "../context/EventContext";

export const useEventContext = () => {
  const context = useContext(EventContext);

  if (!context)
    throw Error(
      "useEventContext mush be wrapped inside an AuthContextProvider"
    );
  return context;
};
