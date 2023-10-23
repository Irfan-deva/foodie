import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomTextInput from '../components/CustomTextInput'
import CustomButton from '../components/CustomButton'

const Home = () => {
  return (
    <View style={styles.container}>
      <CustomTextInput />
      <CustomTextInput />
      <CustomTextInput />
      <CustomButton />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    padding: 16
  }
})