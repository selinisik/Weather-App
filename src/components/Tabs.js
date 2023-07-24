import React from 'react'
import CurrentWeather from '../../src/screens/CurrentWeather'
import UpcomingWeather from '../../src/screens/UpcomingWeather'
import City from '../../src/screens/City'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = (props) => {
  const {weather} = props
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'royalblue',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: { backgroundColor: 'white' },
        headerStyle: { backgroundColor: 'white' },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: 'black'
        },
      }}
    >
      <Tab.Screen
        name={'Current'}
        
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'droplet'}
              size={25}
              color={focused ? 'royalblue' : 'black'}
            />
          )
        }}
      >{()=> <CurrentWeather weatherData = {weather.list[0]}/>}</Tab.Screen>
      <Tab.Screen
        name={'Upcoming'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'clock'}
              size={25}
              color={focused ? 'royalblue' : 'black'}
            />
          )
        }}
      >{() => <UpcomingWeather weatherData = {weather.list}/>}</Tab.Screen>
      <Tab.Screen
        name={'City'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'home'}
              size={25}
              color={focused ? 'royalblue' : 'black'}
            />
          )
        }}
      >{() => <City weatherData={weather.city}/>}</Tab.Screen>
    </Tab.Navigator>
  )
}

export default Tabs
