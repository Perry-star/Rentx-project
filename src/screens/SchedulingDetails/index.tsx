import React from "react";
import {Feather} from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components/native";
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
    Acessories,
    Footer,
    RentalPeriod,
    CalendarIcon,
    DateInfo,
    DateTitle,
    DateValue,
    RentalPrice,
    RentalPriceLabel,
    RentalPriceDetails,
    RentalPriceQuota,
    RentalPriceTotal,


} from './styles';




export function  SchedulingDetails() {
    const theme = useTheme();

    const navigation = useNavigation<any>();

    function handleConfirmRentail(){
        navigation.navigate('SchedulingComplete');
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

              <RentalPeriod>
                    <CalendarIcon>
                        <Feather
                            name="calendar"
                            size={RFValue(24)}
                            color={theme.colors.shape}
                        />

                    </CalendarIcon>

                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue>02/12/2000</DateValue>
                    </DateInfo>
                        <Feather
                            name="chevron-right"
                            size={RFValue(10)}
                            color={theme.colors.text}
                        />  

                    <DateInfo>
                        <DateTitle>ATE</DateTitle>
                        <DateValue>02/12/2000</DateValue>
                    </DateInfo>
              </RentalPeriod>

              <RentalPrice>
                  <RentalPriceLabel>
                      <RentalPriceDetails>
                          <RentalPriceQuota> R$ 580 x3 di??rias</RentalPriceQuota>
                          <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
                      </RentalPriceDetails>
                  </RentalPriceLabel>
              </RentalPrice>
            </Content>
            
            <Footer>
                <Button title='Alugar agora'
                    color={theme.colors.sucess}
                    onPress={handleConfirmRentail}
                />
            </Footer>

        </Container>
    )

}