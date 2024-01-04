import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/AuthContext";
import "./index.css";
import { EventContextProvider } from "./context/EventContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <EventContextProvider>
      <App />
    </EventContextProvider>
  </AuthContextProvider>
);
