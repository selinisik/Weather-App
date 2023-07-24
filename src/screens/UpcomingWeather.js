import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  SafeAreaView,
  StatusBar
} from 'react-native'
import ListItem from '../components/ListItem'


const UpcomingWeather = ({weatherData}) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )
  const { container, image } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/upcoming-bg.jpg')}
        style={image}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
    //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },

  image: {
    flex: 1
  }
})
export default UpcomingWeather
