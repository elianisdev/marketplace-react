import React from "react";
import {Button, Container} from "@mui/material";

export const LoginPage: React.FC <{}> = () => {
    return (
        <Container sx={{mt: 9}} maxWidth="xl">
            <Button variant="contained">Estamos en login</Button>
        </Container>
    )

};