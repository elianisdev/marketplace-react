import React from "react";
import {Button, Container} from "@mui/material";
import {HeaderComponent} from "../../components";

export const HomePage: React.FC <{}> = () => {


    return (
        <Container maxWidth="xl">
            <HeaderComponent
                title="Hola mundo"
                description="Hola mundo bienvenido"
                element={<Button fullWidth variant="contained">Estamos en Home</Button>}
            />
        </Container>
    )

};
