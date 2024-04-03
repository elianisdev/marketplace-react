import React from "react";
import {Routes, Route} from "react-router-dom";
import {HomePage} from "./pages/home";
import {LoginPage} from "./pages/login";

export const AppRouter: React.FC<{}> = () => {
return (
    /*Aqui se trabaja con las rutas */
    <Routes>
        <Route path= "/" element={<HomePage/>}/>
            <Route path= "/login" element={<LoginPage/>}/>

        </Routes>)
}