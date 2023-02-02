import React, { useState } from "react";
import {useTheme} from 'styled-components';
import { Alert, StatusBar } from 'react-native';
import { useNavigation, useRoute} from "@react-navigation/native";

import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { format } from "date-fns";
import { getPlataformDate } from "../../utils/getPlataformDate";

import { 
    Calendar, 
    DayProps, 
    generateInterval,
    markedDatesProps,
} from "../../components/Calendar";

import ArrowSvg from '../../assets/assets/arrow.svg';
import { CarDTO } from "../../dtos/CarDTO";


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


} from "./styles";


interface RentalPeriod {
    startFormatted: string;
    endFormatted: string;
}

interface Params {
    car: CarDTO;
}



export function Scheduling() {
     const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
     const [markedDates, setMarkedDates] = useState<markedDatesProps>({} as markedDatesProps);  
     const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);


     const theme = useTheme()
     const navigation = useNavigation<any>();
     const route = useRoute();
     const { car } = route.params as Params;

     function handleConfirmRentail(){

        if(!rentalPeriod.startFormatted || !rentalPeriod.startFormatted){
            Alert.alert('Selecione o intervalo para alugar.')
        }else{
            navigation.navigate('SchedulingDetails',{
                car,
                dates: Object.keys(markedDates),
            });
        } 
     }
     
     function handleBack(){
         navigation.goBack();
     }

     function handleChangeDate(date: DayProps){
         let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
         let end = date;

         if(start.timestamp > end.timestamp) {
             start = end;
             end = start;
         }

         setLastSelectedDate(end);
         const interval = generateInterval(start, end);
         setMarkedDates(interval);

         const firstDate = Object.keys(interval)[0];
         const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

         setRentalPeriod({
             startFormatted: format(getPlataformDate(new Date(firstDate)), 'dd/MM/yyyy'),
             endFormatted: format(getPlataformDate(new Date(endDate)), 'dd/MM/yyyy'),
         })


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
                                <DateValue selected={!!rentalPeriod.startFormatted}>
                                    {rentalPeriod.startFormatted}
                                </DateValue>
                            </DateView>
                        </DateInfo>

                        <ArrowSvg/>

                        <DateInfo>
                            <DateView selected={false}>
                                <DateTitle>ATÉ</DateTitle>
                                <DateValue selected={!!rentalPeriod.startFormatted}>
                                    {rentalPeriod.endFormatted}
                                </DateValue>
                            </DateView>
                        </DateInfo>
                    
                </RentalPeriod>
            </Header>

            <Content>
                <Calendar
                    markedDates={markedDates}
                    onDayPress={handleChangeDate}
                />
                
            </Content>

            <Footer>
                <Button title="Confirmar" 
                onPress={handleConfirmRentail}/>

            </Footer>

        </Container>
    )
}