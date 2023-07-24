import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  StatusBar
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import IconText from '../components/IconText'
import moment from 'moment'
const City = ({ weatherData }) => {
  const {
    container,
    imageLayout,
    cityName,
    countryName,
    cityText,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout,
    overlay,
    layout
  } = styles
  const { name, country, population, sunrise, sunset } = weatherData
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city-bg.jpg')}
        style={imageLayout}
      >
        <View style={[StyleSheet.absoluteFill, overlay]} />
        <View style={layout}>
          <Text style={[cityName, cityText]}>{name}</Text>
          <Text style={[countryName, cityText]}>{country}</Text>
          <View style={[populationWrapper, rowLayout]}>
            <IconText
              iconName={'user'}
              iconColor={'white'}
              bodyText={`population: ${population}`}
              bodyTextStyles={populationText}
            />
          </View>
          <View style={[riseSetWrapper, rowLayout]}>
            <IconText
              iconName={'sunrise'}
              iconColor={'white'}
              bodyText={moment(sunrise).format('h:mm:ss a')}
              bodyTextStyles={riseSetText}
            />
            <IconText
              iconName={'sunset'}
              iconColor={'white'}
              bodyText={moment(sunset).format('h:mm:ss a')}
              bodyTextStyles={riseSetText}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
    //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  imageLayout: {
    flex: 1
  },
  layout: {
    flex: 1,
    justifyContent: 'center'
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#fff'
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'white'
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: 'white'
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)' // Adjust the opacity (0.5 for 50% transparency)
  }
})
export default City
