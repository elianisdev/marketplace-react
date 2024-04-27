import {Button, Card, CardActions, CardContent, CardMedia, Divider, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {addToCart} from "../../redux/slices/cart.slice";
import {setItem} from "../../utils/localStorage";

type CardProps = {
    image: string;
    name: string;
    species: string;
    status: string;
    id: number;
}

export const CardComponent: React.FC<CardProps> = ({
     image,
      name,
      status,
      species,
       id
}: CardProps) => {
    const [disabledBtn, setDisabledBtn] = useState<boolean>(false)
    let navigate = useNavigate()
    const dispatch = useAppDispatch()

    const itemExist = useAppSelector((state) => state.cartReducer)
    useEffect(() => {
    setDisabledBtn(itemExist.some((item) => item.id === id))
        // Guardar en el localstorage
      setItem("cart", itemExist)
    }, [itemExist, id])
    const handleAddToCart = () => {
        dispatch(
            addToCart({
            id,
            name,
            info: status,
            image}))
    }
return (
    <Card>
    <CardMedia
    component="img"
    height="194"
    image={image}
    alt="Paella dish"
    />
        <CardContent>
            <Typography sx={{mb: 1.5}} variant="h4">
                Name: {name}
            </Typography>
            <Divider/>
            <Typography sx={{mt: 1.5}}>
                Specie: {species}
            </Typography>
            <Typography sx={{mt: 1.5}}>
                State: {status}
            </Typography>

        </CardContent>
        <CardActions>
            <Button
                fullWidth
                variant="contained"
                size="small"
                onClick={() => navigate(`/character/${id}`)}
            >
                Learn More
            </Button>
            <Button
                fullWidth
                variant="outlined"
                size="small"
                disabled={disabledBtn}
                onClick={handleAddToCart}
            >
                Add to Cart
            </Button>
        </CardActions>
    </Card>
)
}