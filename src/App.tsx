import './App.css';
import React from "react";
import { Container, Button } from '@mui/material';
import {NavBar} from "./shared/NavBar";




function App () {
  return (
      <div>
          <NavBar/>
          <Container sx={{mt: 9}} maxWidth="xl">
          <Button variant="contained">Hola Mundo</Button>
      </Container>
      </div>
  );
}
export default App;
