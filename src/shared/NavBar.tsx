import React, {FC} from "react";
import {AppBar, Box, Button, Container, Grid, Toolbar, Typography} from "@mui/material";


export const NavBar: FC<{}> = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="fixed">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid
                            container direction= "row"
                            justifyContent= "space-between"
                            alignItems= "center">

                        <Grid item>
                        <Typography >Tienda de Mascotas</Typography>
                        </Grid>
                        <Grid item>
                          <Button variant= "outlined" >Login</Button>
                            <Button variant= "outlined" >Register</Button>
                        </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    )
}