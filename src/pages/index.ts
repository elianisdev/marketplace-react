import React from "react";

export {HomePage} from "./home";

//Aqui llamo la funcionalidad lazy para que cargue la pagina cuando se necesite y no de una sola vez en este caso solo use a login y character en router tambien modifico y en cada componete lo exporto por efecto
export const LoginPage = React.lazy(() => import("./login"));
export const CharacterPage = React.lazy(() => import("./character"));