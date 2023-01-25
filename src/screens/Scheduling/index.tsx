import React from "react";
import {useTheme} from 'styled-components';
import { StatusBar } from 'react-native';
import { useNavigation} from "@react-navigation/native";

import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Calendar } from "../../components/Calendar";

import ArrowSvg from '../../assets/assets/arrow.svg';


import { 
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    DateView,
    Content,
    Footer,


} from "./styles"





export function Scheduling() {
     const theme = useTheme();

     const navigation = useNavigation<any>();

     function handleConfirmRentail(){
         navigation.navigate('SchedulingDetails');
     }
     
     function handleBack(){
         navigation.goBack();
     }
     
    return(
        <Container>
            <Header>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="transparent"
                    translucent
                />
                <BackButton 
                    onPress={handleBack}
                    color={theme.colors.shape}
                />

                <Title>
                    Escolha uma {'\n'}
                    data de inicio e {'\n'}
                    fim do aluguel
                </Title>
         

                <RentalPeriod>
                   
                        <DateInfo>
                            <DateView selected={false}>
                                <DateTitle>DE</DateTitle>
                                <DateValue>
                                    18/06/2022
                                </DateValue>
                            </DateView>
                        </DateInfo>

                        <ArrowSvg/>

                        <DateInfo>
                            <DateView selected={false}>
                                <DateTitle>ATÉ</DateTitle>
                                <DateValue>
                                    18/06/2022
                                </DateValue>
                            </DateView>
                        </DateInfo>
                    
                </RentalPeriod>
            </Header>

            <Content>
                <Calendar/>
                
            </Content>

            <Footer>
                <Button title="Confirmar" 
                onPress={handleConfirmRentail}/>

            </Footer>

        </Container>
    )
}