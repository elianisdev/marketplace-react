import React, {useEffect, useState} from "react";
import {Box, Button, Container, Grid} from "@mui/material";
import {CardComponent, HeaderComponent} from "../../components";
import {characters} from "../../api/characters";
import {TypeCharacter} from "./interface/character.interface";

export const HomePage: React.FC <{}> = () => {

    const [allCharacters, setAllCharacters] = useState<TypeCharacter[]>([]);

    const getCharacters = async () => {

        try {
            const allCharacters = await characters.getAll({page: 1 });
            if (!allCharacters.data.results) {
                throw new Error("No se recibio información de la API");
            }
            setAllCharacters(allCharacters.data.results);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(()=> {
        getCharacters();
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
                    allCharacters!.length ? (
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
