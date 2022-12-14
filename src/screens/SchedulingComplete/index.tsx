import React from "react";
import { useWindowDimensions, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";


import LogoSvg from '../../assets/assets/logo_background_gray.svg';
import DoneSvg from '../../assets/assets/done.svg';

import { ConfirmButton } from "../../components/ConfirmButton";

import {
    Container,
    Content,
    Title,
    Message,
    Footer,
    LogoWrapper,

} from './styles';




export function SchedulingComplete(){
     const {width} = useWindowDimensions();

     const navigation = useNavigation<any>();

     function handleConfirm(){
        navigation.navigate('Home');
    }


    return (
        <Container>

            <StatusBar
                barStyle="light-content"  
                translucent
                backgroundColor="transparent"
            />
            <LogoWrapper>
                <LogoSvg width = { width }/>
            </LogoWrapper>
            
            
            <Content>
                <DoneSvg width = {80} height= {80}/>
                <Title>Carro Alugado!</Title>

                <Message>
                    Agora você só precisa ir {'\n'}
                    até a concessionária da RENTX {'\n'}
                    pegar o seu automóvel
                </Message>
            </Content>

            <Footer>
                <ConfirmButton title="Ok"
                    onPress={handleConfirm}
                />
            </Footer>
        
        </Container>
    )
}