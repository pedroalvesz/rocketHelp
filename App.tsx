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

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold})

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
      style='light'
      backgroundColor='transparent'
      translucent
      />
      { fontsLoaded ? <SignIn /> : <Loading/> }
    </NativeBaseProvider>
  );
}

