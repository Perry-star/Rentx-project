declare module "*.svg" {
    import React from "react";
    import { Rect } from 'react-native-svg';
    const content: Rect.FC<SvgProps>;
    export default content;
}