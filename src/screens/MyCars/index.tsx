import React, { useState, useEffect } from "react";
import { StatusBar, FlatList} from "react-native";
import { BackButton } from "../../components/BackButton";
import { useNavigation } from '@react-navigation/native';
import { useTheme } from "styled-components";

import { Car } from "../../components/Car";
import { CarDTO } from "../../dtos/CarDTO";
import { api } from "../../services/api";

import {
    Container,
    Header,
    Title,
    SubTitle,
    Content,
    Appointments,
    AppointmentsTitle,
    AppointmentsQuantity,

} from './styles';

interface CarProps {
    id: string;
    user_id: string;
    car:CarDTO;
}

export function MyCars() {
    const [cars, setCars] = useState<CarProps[]>([]);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();
    const theme = useTheme();

    function handleBack(){
        navigation.goBack();
    }

    useEffect(() => {
        async function fetchCars(){
            try {
                const response = await api.get('/schedules_byuser?user_id=2');
                console.log(response.data);

                setCars(response.data);

            } catch (error) {
                console.log(error)
            } finally{
                setLoading(false);
            }
        }
        fetchCars();
       
    },[])

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
                    Seus agendamentos,{'\n'}
                    estão aqui.{'\n'}
                  
                </Title>

                <SubTitle>
                    Conforto, segurança e praticidade

                </SubTitle>
            </Header>

            <Content>
                <Appointments>
                    <AppointmentsTitle>Agendamento feitos</AppointmentsTitle>
                    <AppointmentsQuantity>05</AppointmentsQuantity>
                </Appointments>

                <FlatList
                    data={cars}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => (
                        <Car data={item.car}/>
                    )}
                />
            </Content>

        </Container>
    );
}