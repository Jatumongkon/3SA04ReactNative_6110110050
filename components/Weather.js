import React, { useState, useEffect } from 'react'

import Forecast from './Forecast'
import { ImageBackground, StyleSheet, Text } from 'react-native'

export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=90110,th&units=metric&APPID=15ba2e1cf9bb007deefc525dcd0a921a`)
        .then((response) => response.json())
        .then((json) => {
        setForecastInfo({
            main: json.weather[0].main,
            description: json.weather[0].description,
            temp: json.main.temp
        });
        })
        .catch((error) => {
        console.warn(error);
        });
        }
        }, [props.zipCode])


      
    
    return(
        <ImageBackground source={require("../bg.jpg" )} style={styles.backdrop}>
            <Text>Zip Code</Text>
            <Text>{props.zipCode}</Text>
            <Forecast {...forecastInfo}/>
        </ImageBackground>
    )

}

const styles = StyleSheet.create({
    backdrop: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%'
    },
   });