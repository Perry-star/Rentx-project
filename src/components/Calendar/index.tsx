import React, { useState } from "react";
import { Feather } from '@expo/vector-icons';
import { useTheme } from "styled-components";


import { Calendar as CustomCalendar } from 'react-native-calendars';
import { ScrollView } from "react-native-gesture-handler";

export function Calendar() {
    const theme = useTheme();
    return(
       

      
        <CustomCalendar
            renderArrow={( direction) => 
                <Feather
                    size={24}
                    color={theme.colors.text}
                    name={direction == 'left' ? 'chevron-left' : 'chevron-right'}
                />
            }

       />
      
    );
}