import React, { Fragment, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto'
import { Ubuntu_700Bold, useFonts} from '@expo-google-fonts/ubuntu'
import {AppLoading, Font} from 'expo'
import Routes from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
     Roboto_500Medium,
     Ubuntu_700Bold
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
    <Routes/>
    </>
  );
}



