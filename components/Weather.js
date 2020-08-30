import React, { useState, useEffect } from 'react'


import Forecast from './Forecast'
import { ImageBackground, StyleSheet, Text } from 'react-native'


export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        zipCode: '-',
        main: '-',
        description: '-',
        temp: 0
    })
    useEffect(() => {
        console.log(`${props.zipCode}`)
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

        var bg = `../bg.jpg`
        if(`${props.zipCode}` == '90110'){
           return(
            <ImageBackground source={require(bg)} style={styles.backdrop}>
                <Text>Zip Code</Text>
                <Text>{props.zipCode}</Text>
                <Forecast {...forecastInfo}/>
            </ImageBackground>
        )
        } 
        else if (`${props.zipCode}` == '50000'){
            let bg3 ='../bg3.jpg'
            return(
             <ImageBackground source={require(bg3)} style={styles.backdrop}>
                 <Text>Zip Code</Text>
                 <Text>{props.zipCode}</Text>
                 <Forecast {...forecastInfo}/>
             </ImageBackground>
         )
         } 
         else if (`${props.zipCode}` == '40000'){
            let bg4 ='../bg4.jpg'
            return(
             <ImageBackground source={require(bg4)} style={styles.backdrop}>
                 <Text>Zip Code</Text>
                 <Text>{props.zipCode}</Text>
                 <Forecast {...forecastInfo}/>
             </ImageBackground>
         )
         } 
         else if (`${props.zipCode}` == '20000'){
            let bg5 ='../bg5.jpg'
            return(
             <ImageBackground source={require(bg5)} style={styles.backdrop}>
                 <Text>Zip Code</Text>
                 <Text>{props.zipCode}</Text>
                 <Forecast {...forecastInfo}/>
             </ImageBackground>
         )
         } 
        else {
            let bg2  = '../bg2.jpg'
            return(
                <ImageBackground source={require(bg2)} style={styles.backdrop}>
                    <Text>Zip Code</Text>
                    <Text>{props.zipCode}</Text>
                    <Forecast {...forecastInfo}/>
                </ImageBackground>
            )
        }

      
    /*
    return(
        
        <ImageBackground source={require(bg2)} style={styles.backdrop}>
            <Text>Zip Code</Text>
            <Text>{props.zipCode}</Text>
            <Forecast {...forecastInfo}/>
        </ImageBackground>
    )
*/
}

const styles = StyleSheet.create({
    backdrop: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%'
    },
   });