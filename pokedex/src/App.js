import React from "react";
import Router from "../src/Routes/Router";
import { GlobalState } from "./Global/GlobalState";


function App() {
  return (
    <GlobalState>
        <Router/>
    </GlobalState>
  );
}

export default App;