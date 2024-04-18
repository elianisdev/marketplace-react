import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {characters} from "../../api/characters";
import {ICharacter} from "./interface/character.interface";
import {Box, CircularProgress, Container, Grid} from "@mui/material";

export const CharacterPage : React.FC  = () => {
    const {id} = useParams();

    const [loading, setLoading] = useState<boolean>(true);
    const [character , setCharacter] = useState< ICharacter | null >(null);



    React.useEffect(() => {
        characters
            .getById({id})
            . then((r)=> {
                setCharacter(r.data)
            setLoading(false)
            })
            .catch((e)=> console.error(e))
    }, []);
    return (
        <Box sx={{width: "100"}}>
        <Container maxWidth="xl">
            {
                loading ?
                    <Box sx={{display: "flex", justifyContent: "center", mt: 4}}>
                    <CircularProgress />
                </Box> : (
                    <Grid container>
                        <Grid item></Grid>
                        <Grid item>
                            <img src={character!.image} style={{width:"100%", borderRadius:"0.5em"}} alt={character?.name} />
                        </Grid>

                    </Grid>
                )}
        </Container>
        </Box>
    )
}
