import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomButton = () => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.btnText}>SUBMIT</Text>
    </Pressable>


  )
}

export default CustomButton

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#FAE9EA",
    alignItems: 'center',
    borderRadius: 5
  },
  btnText: {
    color: '#DD4D44',
    fontWeight: '500'
  }
})