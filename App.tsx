import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { StatusBar } from 'expo-status-bar';
import { 
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
 } from '@expo-google-fonts/roboto'


import { THEME } from './src/styles/theme';
import { Loading } from './src/Components/Loading';
import { SignIn } from './src/screen/Signin';
import { Dashboard } from './src/screen/Dashboard';
import { Register } from './src/screen/Register';
import { Details } from './src/screen/Details';

export default function App() {
  //UseFonts retorna se as fontes carregaram ou não em boolean
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold})

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
      style='light'
      backgroundColor='transparent'
      translucent
      />
      { fontsLoaded ? <Details status="open"/> : <Loading/> }
    </NativeBaseProvider>
  );
}

//NativeBase
//react-native-svg-transformer
//Prosphor Icons