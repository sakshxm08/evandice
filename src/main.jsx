import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/AuthContext";
import "./index.css";
import { AddEventOrFestContextProvider } from "./context/AddEventOrFestContext.jsx";
import { EventsContextProvider } from "./context/EventsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <EventsContextProvider>
    <AuthContextProvider>
      <AddEventOrFestContextProvider>
        <App />
      </AddEventOrFestContextProvider>
    </AuthContextProvider>
  </EventsContextProvider>
);
