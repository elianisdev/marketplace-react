import React, {useEffect } from "react";
import {Box, Button, Container, Grid} from "@mui/material";
import {CardComponent, HeaderComponent} from "../../components";
import {characters} from "../../api/characters";
import {TypeCharacter} from "./interface/character.interface";

export const HomePage: React.FC <{}> = () => {

    const [allCharacters, setAllCharacters] = React.useState<TypeCharacter[] | null>(null)
    useEffect(()=> {
        characters.getAll({page: 1 }).then((r) => {
           setAllCharacters(r.data.result);
        }).catch((e) => {
            console.error(e);
        })
    },[]);

    return (
        <Container maxWidth="xl">
            <HeaderComponent
                title="Hola mundo"
                description="Hola mundo bienvenido"
                element={
                <Button fullWidth variant="contained">
                    Estamos en Home
                </Button>
            }
            />
            <div>
                {
                    allCharacters?.length !==0 ? (
                        <Grid container spacing={2} direction="row">
                            {allCharacters!.map((character)=> (
                                <Grid item xs={3}>
                                    <CardComponent key={character.id} image={character.image} name={character.name} species={character.species} status={character.status}  />
                                </Grid>))
                            }
                        </Grid>
                    ) : "No se recibio información de la API"
                }
            </div>
        </Container>
    )
};
