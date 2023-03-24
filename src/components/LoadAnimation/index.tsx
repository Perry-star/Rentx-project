import react from 'react';
import LottieView from 'lottie-react-native';

import loadingCar from '../../assets/assets/loadingCar.json';

import {

    Container,

} from './styles'

export function LoadAnimation() {
    return(
        <Container>
            <LottieView
                source={loadingCar}
                autoPlay
                resizeMode='contain'
                style={{height: 200}}
                loop
            />


        </Container>

    )
}