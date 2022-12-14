import React from "react";
import { useNavigation } from "@react-navigation/native";


import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";

import speedSvg from '../../assets/assets/speed.svg';
import accelerationSvg from '../../assets/assets/acceleration.svg';
import forceSvg from '../../assets/assets/force.svg';
import gasolineSvg from '../../assets/assets/gasoline.svg';
import exchangeSvg from '../../assets/assets/exchange.svg';
import peopleSvg from '../../assets/assets/people.svg';

import {
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    About,
    Acessories,
    Footer,


} from './styles';


export function  CarDetails() {

    const navigation = useNavigation<any>();


    function handleConfirmRentail(){
        navigation.navigate('Scheduling');
    }

    return(
        <Container>
            <Header>
                <BackButton onPress={() =>{}} />
            </Header>
            <CarImages>
                <ImageSlider
                    imagesUrl={['https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png']}
                />
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>Lamborghini</Brand>
                        <Name>Huracan</Name>
                    </Description>

                    <Rent>
                        <Period>Ao dia</Period>
                        <Price> R$ 580</Price>
                    </Rent>
                </Details>

                <Acessories>
                     <Accessory name='380Km/h' icon={speedSvg}/>
                     <Accessory name='3.2s' icon={accelerationSvg}/>
                     <Accessory name='800 HP' icon={forceSvg}/>
                     <Accessory name=' Gasolina' icon={gasolineSvg}/>
                     <Accessory name='Auto' icon={exchangeSvg}/>
                     <Accessory name='2 pessoas' icon={peopleSvg}/>
                </Acessories>

                <About>
                    Este ?? aut??movel desportivo. Surgiu do lend??rio 
                    touro de lide indultado na pra??a Real Maestranza de Sevilla. 
                    ?? um bel??ssimo carro para quem gosta de acelerar.
                </About>
            </Content>
            
            <Footer>
                <Button title='Escolher periodo do aluguel'
                    onPress={handleConfirmRentail}
                />
            </Footer>

        </Container>
    )

}