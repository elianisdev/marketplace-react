import React, {useState} from "react";
import {Box, Container, Grid, Paper, Typography, TextField, Button} from "@mui/material";


type LoginType = {
    username: string;
    password: string;
}

export const LoginPage: React.FC <{}> = () => {
    const [LoginData, setLoginData] = useState<LoginType>({
        username: "",
        password: ""
    })

    const dataLogin= (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({
            ...LoginData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(LoginData);
    }



    return (
        <Container maxWidth="sm">
           <Grid
               container
               direction="column"
               alignItems="center"
               justifyContent="center"
               sx={{ minHeight: '100vh' }}
           >
                <Grid item>
                  <Paper sx={{padding: "1.2em", borderRadius: "0.5em" }}>
                      <Typography variant="h4" align="center" sx={{mt:1, mb:1}}>Iniciar sesión</Typography>
                    <Box component="form" onSubmit={handleSubmit}>
                            <TextField
                                name="username"
                                margin="normal"
                                type="text"
                                fullWidth
                                label="Email"
                                sx={{mt:2, mb:1.5}}
                                required
                                onChange={dataLogin}
                            />
                            <TextField
                                name="password"
                                margin="normal"
                                type="password"
                                fullWidth
                                label="Password"
                                sx={{mt:1.5, mb:1.5}}
                                required
                                onChange={dataLogin}
                            />
                        <Button fullWidth type="submit" variant="contained" sx={{mt:1.5, mb:3}}>Iniciar Sesion</Button>
                    </Box>
                  </Paper>
                </Grid>
           </Grid>
        </Container>
    )

};