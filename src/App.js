import React from "react";
import { BrowserRouter } from "react-router-dom";

import RoutesSite from "./routes/routes";

export default function App(){
  return(
    <BrowserRouter>
      <RoutesSite/>
    </BrowserRouter>
  );
}