import React from 'react'
import { View, Text } from 'react-native'

const RowText = (props) => {
  const {
    message1,
    message2,
    message1styles,
    message2styles,
    containerStyles
  } = props
  return (
    <View style={containerStyles}>
      <Text style={message1styles}>{message1}</Text>
      <Text style={message2styles}>{message2}</Text>
    </View>
  )
}

export default RowText
