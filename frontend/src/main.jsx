// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import the main App component
import "./index.css"; // Global styles for the application
import ShopContextProvider from "./Components/Context/ShopContext";

// Create the root element and render the App component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <React.StrictMode>
    <ShopContextProvider>
    <App />
    </ShopContextProvider>
  </React.StrictMode>
   
);
