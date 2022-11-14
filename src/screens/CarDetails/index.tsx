import React from "react";


import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import {
    Container,
    Header,
    CarImage,

} from './styles';

export function  CarDetails() {
    return(
        <Container>
            <Header>
                <BackButton onPress={() =>{}} />
            </Header>
            <CarImage>
                <ImageSlider
                    imagesUrl={['https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png']}
                />
            </CarImage>

        </Container>
    )

}