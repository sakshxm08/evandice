import { useContext } from "react";
import { AddEventOrFestContext } from "../context/AddEventOrFestContext";

export const useAddEventOrFestContext = () => {
  const context = useContext(AddEventOrFestContext);

  if (!context)
    throw Error(
      "useAddEventOrFestContext mush be wrapped inside an AddEventOrFestContextProvider"
    );
  return context;
};
