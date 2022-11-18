/**
 * @format
 */
import React, {useState, useEffect} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import ProductProvider from './app/ui/providers/ProductProvider';
import CartProvider from './app/ui/providers/CartProvider';

const theme ={

    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        primary: "black"
    }

}

export default function Main(){

    // cria uma variável const chamada value que usa o useState, e essa variável começa com o valor 1
    const [value, setValue] = useState(1)

    useEffect(()=> {

        setTimeout(()=>{
            setValue(2) // seta o valor 2 na variável value, utilizando o setValue
        }, 3000)
    })

    return(
        <PaperProvider theme={theme}>
            <CartProvider>
                <App/>
            </CartProvider>
        </PaperProvider>
    )

}

AppRegistry.registerComponent(appName, () => Main);
