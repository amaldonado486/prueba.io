//import ReactDOM from 'react-dom';
//import ReactDOM from "react-dom/client";
//import { createRoot } from "react-dom/client";

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { UserProvider } from "./context/UserContext";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter } from "react-router-dom";


/*ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);*/

/*ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById("root")
);*/





const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
