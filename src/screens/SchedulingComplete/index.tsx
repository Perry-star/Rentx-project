import React from "react";
import { useWindowDimensions } from "react-native";

import Logo_Background_GraySvg from '../../assets/assets/logo_background_gray.svg';
import DoneSvg from '../../assets/assets/done.svg';

import { ConfirmButton } from "../../components/ConfirmButton";

import {
    Container,
    Content,
    Title,
    Message,
    Footer,

} from './styles';


export function SchedulingComplete(){
     const {width} = useWindowDimensions();


    return (
        <Container>
            <Logo_Background_GraySvg width = { width }/>
            
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
                <ConfirmButton title="Ok" />
            </Footer>
        
        </Container>
    )
}