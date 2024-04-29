import './App.css';
import React, {Suspense} from "react";
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./Router";
import {NotificationProvider} from "./context/notification.context";


function App () {
  return (
      <NotificationProvider>
          <BrowserRouter>
              <Suspense fallback={"Cargando..."}>
                  <AppRouter />
              </Suspense>

          </BrowserRouter>
      </NotificationProvider>
  );
}
export default App;
