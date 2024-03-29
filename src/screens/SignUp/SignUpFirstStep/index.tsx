import React, { useState } from "react";
import {KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert} from "react-native"
import { BackButton } from "../../../components/BackButton";
import { useNavigation } from "@react-navigation/native";
import { Bullet } from "../../../components/Bullet";
import { Input } from "../../../components/Input";

import * as Yup from 'yup';

import {
    Container,
    Header,
    Steps,
    Title,
    SubTitle,
    Form, 
    FormTitle,

   
} from "./styles";
import { Button } from "../../../components/Button";


export function SignUpFirstStep() {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [driverLicense, setDriverLicense] = useState('');

    function handleBack(){
        navigation.goBack();
    }
    
    async function handleNextStep(){

        try{
            const schema = Yup.object().shape({
                driverLicense: Yup.string()
                .required('CNH é obrigatŕio'),
                email: Yup.string()
                .email('E-mail inválido')
                .required('E-mail é obrigatório'),
                name: Yup.string()
                .required('Nome é obrigatório')
            })

            const data = {name, email, driverLicense};
            await schema.validate(data);

            navigation.navigate("SignUpSecondStep", {user: data})
        } catch (error) {
            if(error instanceof Yup.ValidationError){
                return Alert.alert('Opa', error.message)
            }
        }  
    }

    return(
        <KeyboardAvoidingView behavior="position" enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Header>
                        <BackButton onPress={handleBack}/>
                        <Steps>
                            <Bullet active/>
                            <Bullet/>
                        </Steps>
                    </Header>
                    <Title>
                        Crie sua{'\n'}conta
                    </Title>
                    <SubTitle>
                        Faça seu cadastro de {'\n'}
                        Forma rápida e fácil
                    </SubTitle>

                    <Form>
                        <FormTitle>
                            1. Dados
                        </FormTitle>
                        <Input
                            iconName="user"
                            placeholder="Nome" 
                            value={name}  
                            onChangeText={setName}            
                        />
                        <Input
                            iconName="mail"
                            placeholder="E-mail"
                            keyboardType="email-address" 
                            value={email}    
                            onChangeText={setEmail}           
                        />
                        <Input
                            iconName="credit-card"
                            placeholder="CNH" 
                            keyboardType="numeric"
                            value={driverLicense} 
                            onChangeText={setDriverLicense}              
                        />
                    </Form>
                    <Button 
                        title="Próximo"
                        onPress={handleNextStep}
                    />
                    
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}