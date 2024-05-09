import React, {FC} from "react";
import {AppBar, Badge, Box, Button, Container, Grid, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { CartComponent } from './Cart';
import {logout} from "../redux/slices/auth.slice";


export const NavBar: FC<{}> = () => {
    const navigate = useNavigate();
    const {isAuth} = useAppSelector(state => state.authReducer);
    const [open, setOpen] = React.useState<boolean>(false);

    const dispatch = useAppDispatch();
    const handleLogout = () => {
    dispatch(logout())
        navigate("/login")
    }
    const handleStateViewDrawer = () => {
        setOpen((oldValue) => !oldValue);
    };
    const items = useAppSelector((state) => state.cartReducer);
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="sticky">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid
                            container direction= "row"
                            justifyContent= "space-between"
                            alignItems= "center">

                        <Grid item>
                        <Typography >Tienda Ricky Morty</Typography>
                        </Grid>
                        <Grid item>
                            {
                                isAuth ?
                                    <Button variant= "contained" onClick={() => handleLogout()}>Logout</Button>
                                    : <Stack direction="row" spacing={2}>
                                        <Button variant= "contained" onClick={() => navigate("Login")}>Login</Button>
                                        <Button variant= "outlined" >Register</Button>
                                    </Stack>
                            }
                            <IconButton
                                color="primary"
                                onClick={() => handleStateViewDrawer()}>
                                <Badge color="error" badgeContent={items.length} >
                                    <ShoppingCartOutlinedIcon />
                                </Badge>
                            </IconButton>
                        </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
            <CartComponent
                open={open}
                handleStateViewDrawer={handleStateViewDrawer}
            />
        </Box>
    )
}
