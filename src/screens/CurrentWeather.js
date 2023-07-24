//import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

export default function CurrentWeather({weatherData}) {
  const {
    highLow,
    highLowWrapper,
    wrapper,
    container,
    tempStyle,
    feels,
    description,
    message,
    bodyWrapper,
    overlay
  } = styles
  
  const { main:{temp, feels_like, temp_max, temp_min} , weather} =  weatherData
  const weatherCondition = weather[0]?.main
  
  return (
    <SafeAreaView style={[wrapper, {backgroundColor: weatherType[weatherCondition]?.backgroundColor}]}>
       <View style={[StyleSheet.absoluteFill, overlay]} />
      <View style={container}>
        <Feather name={weatherType[weatherCondition]?.icon} size={100} color="white" />
        <Text style={tempStyle}>{`${temp} °`}</Text>
        <Text style={feels}>{`Feels Like ${feels_like} °`}</Text>
        <RowText
          message1={`High: ${temp_max}° `}
          message2={`Low: ${temp_min}°`}
          message1styles={highLow}
          message2styles={highLow}
          containerStyles={highLowWrapper}
        />
      </View>
      <RowText
        message1={weather[0]?.description}
        message2={weatherType[weatherCondition]?.message}
        message1styles={description}
        message2styles={message}
        containerStyles={bodyWrapper}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempStyle: {
    color: 'white',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'white'
  },
  highLow: {
    fontSize: 24,
    color: 'white'
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48,
    color: 'white'
  },
  message: {
    fontSize: 30,
    color: 'white'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)' // Adjust the opacity (0.5 for 50% transparency)
  }
})
