import React from 'react'
import { useState , useEffect} from 'react'
import { View, Text, Button, StyleSheet, Platform } from 'react-native'

const Counter = () => {
  const [count, setCount] = useState(0)
  const[newCount, setNewCount] = useState(0)

    useEffect(() => {
        console.log(`Count Changed`)
        return () => {console.log(`CleanUp`)}
    },[count])
  const { container, title } = styles
  return (
    <View style={container}>
      <Text style={title}>{`count: ${count}`}</Text>
      <Button
        color={'red'}
        title={'Increase the count'}
        onPress={() => {
          setCount(count + 1)
        }}
      />
      <Button
        color={'green'}
        title={'Decrease the count'}
        onPress={() => {
            setCount(count - 1)
        }}
      />
      <Button
        color={'red'}
        title={'Increase the count'}
        onPress={() => {
          setNewCount(newCount+ 1)
        }}
      />
      <Button
        color={'green'}
        title={'Decrease the count'}
        onPress={() => {
            setNewCount(newCount - 1)
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    marginTop: Platform.OS === 'android' ? 25 : 0
  },
  title: {
    alignSelf: 'center',
    fontSize: 25,
    marginTop: 25,
    marginBottom: 25
  }
})
export default Counter
