import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { EventProvider } from "./EventContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EventProvider>
      <App />
    </EventProvider>
  </React.StrictMode>
);
