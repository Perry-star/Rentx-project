declare module 'styled-components/native' {
    // original node_modules/@types/styled-components/native.d.ts 
    import * as React from 'react'
    import * as ReactNative from 'react-native'
  
    // ...
  
    // Add as the workaround. See https://github.com/styled-components/styled-components/issues/1803#issuecomment-407332173
    declare interface StyledFlatList {
      FlatList<T>(styles: any): new () => ReactNative.FlatList<T>
    }
  
    declare const styled: ReactNativeStyledInterface<DefaultTheme> & StyledFlatList
  }