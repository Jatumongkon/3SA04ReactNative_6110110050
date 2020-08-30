import React from 'react'
import { Text ,View, StyleSheet } from 'react-native'

export default function Forecast(props){
return (
    <View style = {styles.fonts}>
    <Text>{props.main}</Text>
    <Text>{props.description}</Text>
    <Text>{props.temp}</Text>
    <Text>°C</Text>
    </View>
    )

}
const styles = StyleSheet.create({
    
    fonts:{ 
        fontSize: 20,
        alignItems: 'center',
        backgroundColor: 'white',
        
    },
   });