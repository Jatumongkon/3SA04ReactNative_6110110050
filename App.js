import React from 'react';
import { ImageBackground, StyleSheet, Text } from 'react-native'
import ZipCodeScreen from './screen/ZipCodeScreen' ;
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WeatherScreen from './screen/WeatherScreen';


const Stack = createStackNavigator();
export default function App() {
 return (

 <NavigationContainer> 

 <Stack.Navigator> 
    <Stack.Screen name="Home" component={ZipCodeScreen} />
    <Stack.Screen name="Weather" component={WeatherScreen} />
 </Stack.Navigator>
 
 </NavigationContainer>

 );
}


const styles = StyleSheet.create({
    backdrop: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%'
    },
   });