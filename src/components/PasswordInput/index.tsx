import React, { useState } from "react";
import {Feather} from '@expo/vector-icons';
import { TextInputProps } from "react-native";
import {useTheme} from  'styled-components';
import { BorderlessButton } from "react-native-gesture-handler";

import { 
    Container,
    InputText,
    IconContainer,



 } from './styles';



 interface Props extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name']
    value: string
 }

 

export function PasswordInput({
    iconName,
    value,
    ...rest
} : Props){
    const [ isPasswordVisible, setIsPasswordVisible ] = useState(true);
    const [ isFocused, setIsFocused ] = useState(false);
    const [ isFilled, setIsFilled ] = useState(false);

    const theme = useTheme();

    function handleInputFocus () {
        setIsFocused(true);

    }

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!value)
    }

    function handlePasswordVisibleChange() { 
        setIsPasswordVisible(prevState => !prevState)
    }

   
    return(
        <Container>
            <IconContainer isFocused={isFocused}>
                <Feather
                    name={iconName}
                    size={24}
                    color={isFocused || isFilled ? theme.colors.main : theme.colors.text_detail}
                />

            </IconContainer>

            <InputText {...rest}
                secureTextEntry={isPasswordVisible}
                placeholderTextColor={theme.colors.text}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                isFocused={isFocused}
            />


            <IconContainer isFocused={isFocused}>
                <BorderlessButton onPress={handlePasswordVisibleChange}>
                    <Feather
                        name={isPasswordVisible ? "eye" : "eye-off"}
                        size={24}
                        color={theme.colors.text_detail}
                    />
                </BorderlessButton>
            </IconContainer>
        </Container>
    )
}