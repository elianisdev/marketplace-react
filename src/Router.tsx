import React from "react";
import {Routes, Route} from "react-router-dom";
import {HomePage} from "./pages/home";
import {LoginPage} from "./pages/login";
import {RouterLayout} from "./shared/RouterLayout";
import {CharacterPage} from "./pages/character";

export const AppRouter: React.FC<{}> = () => {
return (
    /*Aqui se trabaja con las rutas */
    <Routes>
        <Route path= "/" element={<RouterLayout/>}>
            <Route path= "/" element={<HomePage/>}/>
            <Route path= "/character/:id" element={<CharacterPage/>}/>
        </Route>
        <Route path= "/login" element={<LoginPage/>}/>
{/*si quiero hacer una rota diferente que no se comparta la realizo debajo de cerrar route RouterLayout comparte la ruta de login y home*/}

        </Routes>)
}