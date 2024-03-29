import React, { useState, useEffect } from "react";
import { StatusBar, FlatList} from "react-native";
import { BackButton } from "../../components/BackButton";
import { useNavigation } from '@react-navigation/native';
import { useTheme } from "styled-components";
import { AntDesign } from "@expo/vector-icons";

import { Car } from "../../components/Car";
import { CarDTO } from "../../dtos/CarDTO";
import { api } from "../../services/api";
import { Load } from "../../components/Load";
import { LoadAnimation } from "../../components/LoadAnimation";

import {
    Container,
    Header,
    Title,
    SubTitle,
    Content,
    Appointments,
    AppointmentsTitle,
    AppointmentsQuantity,
    CarWrapper,
    CarFooter,
    CarFooterPeriod,
    CarFooterTitle,
    CarFooterDate,

} from './styles';



interface CarProps {
    id: string;
    user_id: string;
    car:CarDTO;
    startDate: string;
    endDate: string;
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
                const response = await api.get('/schedules_byuser?user_id=1');
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
            {loading ? <LoadAnimation/> :

            <Content>
                <Appointments>
                    <AppointmentsTitle>Agendamento feitos</AppointmentsTitle>
                    <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
                </Appointments>

                <FlatList
                    data={cars}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => (
                        <CarWrapper>
                             <Car data={item.car}/>
                             <CarFooter>   
                                <CarFooterTitle>Período</CarFooterTitle>
                                     <CarFooterPeriod>
                                        <CarFooterDate>{item.startDate}</CarFooterDate>
                                            <AntDesign
                                                name="arrowright"
                                                size={20}
                                                color={theme.colors.title}
                                                style={{ marginHorizontal: 10 }}
                                            />
                                        <CarFooterDate>{item.endDate}</CarFooterDate>
                                 </CarFooterPeriod>
                             </CarFooter>
                        </CarWrapper>
                       
                    )}
                />
            </Content>
                    }

        </Container>
    );
}