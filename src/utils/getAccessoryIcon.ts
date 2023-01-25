import SpeedSvg from '../assets/assets/speed.svg';
import AccelerationSvg from '../assets/assets/acceleration.svg';
import ForceSvg from '../assets/assets/force.svg';
import GasolineSvg from '../assets/assets/gasoline.svg';
import HybridSvg from '../assets/assets/hybrid.svg';
import EnergySvg from '../assets/assets/energy.svg';
import ExchangeSvg from '../assets/assets/exchange.svg';
import PeopleSvg from '../assets/assets/people.svg';
import CarSvg from '../assets/assets/car.svg';

export function getAccessoryIcon(type: string){
    switch (type) {
        case 'speed':
            return SpeedSvg;
        case 'acceleration':
            return AccelerationSvg;
        case 'turning_diameter':
            return ForceSvg;
        case 'gasoline_motor':
            return GasolineSvg;
        case 'electric_motor':
            return EnergySvg;
        case 'hybrid_motor':
            return HybridSvg;
        case 'exchange':
            return ExchangeSvg;
        case 'seats':
            return PeopleSvg;
        
        default:
            return CarSvg;
    }
}