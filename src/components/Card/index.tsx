import {Button, Card, CardActions, CardContent, CardMedia, Divider, Typography} from "@mui/material";
import React from "react";

type CardProps = {
    image: string;
    name: string;
    species: string;
    status: string;
}

export const CardComponent: React.FC<CardProps> = ({image, name, status, species}) => {
return (
    <Card sx={{maxWidth: 345}}>
    <CardMedia
    component="img"
    height="194"
    image={image}
    alt="Paella dish"
    />
        <CardContent>
            <Typography sx={{mb: 1.5}} variant="h4">
                nombre: {name}
            </Typography>
            <Divider/>
            <Typography sx={{mt: 1.5}}>
                Especie: {species}
            </Typography>
            <Typography sx={{mt: 1.5}}>
                estado: {status}
            </Typography>

        </CardContent>
        <CardActions>
            <Button fullWidth variant="contained" size="small">Learn More</Button>
        </CardActions>
    </Card>
)
}