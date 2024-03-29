import React from "react";
import { useWindowDimensions, StatusBar } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";


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

interface Params {
    title: string;
    message: string;
    nextScreenRoute: string;
}


export function Confirmation(){
     const {width} = useWindowDimensions();

     const navigation = useNavigation<any>();
     const route = useRoute();
     const { title, message, nextScreenRoute} = route.params as Params;
    
     function handleConfirm(){
        navigation.navigate(nextScreenRoute);
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
                <Title>{title}</Title>

                <Message>{message}</Message>
            </Content>

            <Footer>
                <ConfirmButton title="Ok"
                    onPress={handleConfirm}
                />
            </Footer>
        
        </Container>
    )
}