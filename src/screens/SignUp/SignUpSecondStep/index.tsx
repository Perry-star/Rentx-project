import React, { useState } from "react";
import {KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert} from "react-native"
import { api } from "../../../services/api";

import { BackButton } from "../../../components/BackButton";
import { CommonActions, useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { Bullet } from "../../../components/Bullet";
import { PasswordInput } from "../../../components/PasswordInput";


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


interface Params {
    user:{
        name: string;
        email: string;
        driverLicense: string;
    }
}


export function SignUpSecondStep() {
    const [password, setPassword] = useState('');
    const [ passwordConfirm, setPasswordConfirm] = useState('');

    const navigation = useNavigation();
    const route = useRoute();
    const theme = useTheme();

    const { user } = route.params as Params;
    
    function handleBack(){
        navigation.goBack();
    }

    async function handleRegister(){
        if(!password || !passwordConfirm){
            return Alert.alert('Informar a senha e a confirmação da senha')
        }

        if(password != passwordConfirm){
            return Alert.alert('As senhas não são iguais');
        }

        await api.post('/users', {
            name: user.name,
            email: user.email,
            driver_license: user.driverLicense,
            password
        })
        .then(() => {
            navigation.dispatch(
                CommonActions.navigate('Confirmation', {
                    nextScreenRoute: 'SignIn',
                    title: 'Conta Criada!',
                    message: `Agora é só fazer login\n e aproveitar.`
                
                })
            )
        })
        .catch(() => {
            Alert.alert('Opa', 'Não foi possível cadastrar');
        });
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
                            2. Dados
                        </FormTitle>

                        <PasswordInput
                            iconName="lock"
                            placeholder="Senha"
                            value={password}
                            onChangeText={setPassword}
                        />
                          <PasswordInput
                            iconName="lock"
                            placeholder="Senha"
                            value={passwordConfirm}      
                            onChangeText={setPasswordConfirm}              
                         />
                    </Form>
                    <Button 
                        color={theme.colors.sucess}
                        title="Cadastrar"
                        onPress={handleRegister}
                    />
                    
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}