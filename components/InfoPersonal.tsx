import { Text, View, StyleSheet} from 'react-native'
import React, { Component } from 'react'

export const InfoPersonal = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>WENDY VANESSA LÓPEZ MONROY</Text>
        <Text style={styles.profesion}>DESARROLLADOR JUNIOR</Text>
        <Text style={styles.info}>(+57) 3102946486</Text>
        <Text style={styles.info}>wvanessalomo2006@gmail.com</Text>
        <Text style={styles.info}>https://www.linkedin.com/in/wendy-l%C3%B3pez-436753309/</Text>
        <Text style={styles.info}>https://github.com/WenVanessa</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20, // Ajustar margen según necesidad
    marginTop: 15,
  },

  name:{
    color: 'white',
    marginBottom: 10,
    fontFamily: 'Bevan-Regular',
    fontSize: 24,
  },

  profesion:{
    color: '#F79704',
    fontFamily: 'Oswald-VariableFont_wght',
    fontSize: 18,
    marginBottom: 10,
  },

  info:{
    color: 'white',
    fontSize: 12,
    marginBottom: 5,
  }
})

export default InfoPersonal