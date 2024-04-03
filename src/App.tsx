import './App.css';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./Router";
import {NavBar} from "./shared/NavBar";

function App () {
  return (
     <BrowserRouter>
         <NavBar/>
        <AppRouter />
         </BrowserRouter>
  );
}
export default App;
