import React, {useEffect, useState} from "react";
import {Box, Button, CircularProgress, Container, Grid, Pagination, Stack} from "@mui/material";
import {CardComponent, HeaderComponent} from "../../components";
import {characters} from "../../api/characters";
import {TypeCharacter} from "./interface/character.interface";

export const HomePage: React.FC <{}> = () => {
    const [page, setPage] = useState<number>(1);
    const [count, setCount] = useState(1)
    const [allCharacters, setAllCharacters] = useState<TypeCharacter[]>([]);
    const [Loading, setLoading] = useState<boolean>(true);

    const getCharacters = async () => {

        try {
            setLoading(true)
            const allCharacters = await characters.getAll({page});
            if (!allCharacters.data.results) {
                throw new Error("No se recibio información de la API");
            }
            setCount(allCharacters.data.info.pages)
            setAllCharacters(allCharacters.data.results);
             setLoading(false);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(()=> {
        getCharacters();
    }, [page]);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

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
            {Loading ? (
                <Box sx={{display: "flex", justifyContent: "center", mt: 4}}>
                <CircularProgress />
                </Box>
                ) : (
                <>
                    <div>
                        {
                            allCharacters!.length ? (
                                <Grid sx={{my: 2}} container spacing={2} direction="row">
                                    {allCharacters!.map((character) => (
                                        <Grid item xs={3}>
                                            <CardComponent key={character.id} image={character.image}
                                                           name={character.name} species={character.species}
                                                           status={character.status}
                                                           id={character.id}
                                            />
                                        </Grid>))}
                                </Grid>
                            ) : ("No se recibio información de la API"
                            )}
                    </div>
                    <Box sx={{ width: "100%", display:"flex", justifyContent:"center" }}>
                        <Pagination
                            variant="outlined"
                            count={count} page={page}
                            onChange={handleChange}
                            sx={{mb:3}}
                            size="large" />
                    </Box>

                </>


    )
}
</Container>
)
};
