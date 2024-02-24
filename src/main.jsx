import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/AuthContext";
import "./index.css";
import { AddEventOrFestContextProvider } from "./context/AddEventOrFestContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <AddEventOrFestContextProvider>
      <App />
    </AddEventOrFestContextProvider>
  </AuthContextProvider>
);
