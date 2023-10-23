import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CustomTextInput = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='placeholde'
        style={styles.input} />
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#ededed',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5
  }
})