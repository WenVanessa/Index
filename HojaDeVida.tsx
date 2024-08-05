import { Text, View, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React, { Component } from 'react'
import {InfoPersonal} from './components/InfoPersonal'
import Perfil from './components/Perfil'
import Softkills from './components/Softkills'
import Skills from './components/Skills'
import Educacion from './components/Educación'


export const Hoja = () => {
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Image
            style={styles.stretch}
            source={require('../hoja_de_vida/assets/mujer.jpg')} 
          /><InfoPersonal/> 
            <View style={styles.inter}>
              <Text style={styles.titulo}>ACERCA DE MI</Text>
            </View> 
            <Perfil></Perfil>
            <View style={styles.inter}>
              <Text style={styles.titulo}>SOFTKILLS</Text>
            </View> 
            <Softkills></Softkills>
            <View style={styles.inter}>
              <Text style={styles.titulo}>SKILLS</Text>
            </View>
            <Skills></Skills>
            <View style={styles.inter}>
              <Text style={styles.titulo}>EDUCACIÓN</Text>
            </View>
            <Educacion></Educacion>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body:{
    backgroundColor: '#011628',
    alignItems: 'center',
    flex: 1,
  },

  scrollViewContent: {
    alignItems: 'center',
  },

  inter: {
    marginTop: 5,
    backgroundColor: '#F79704',
    width: '100%', 
    padding: 5, 
    alignItems: 'center', 
  },

  titulo: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Bevan-Regular',
  },

  container: {
    paddingTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: -45,
  },

  stretch: {
    width: 200,
    height: 200,
    borderRadius: 100,
    resizeMode: 'stretch',
    marginLeft: 20,
  },

  linea:{
    color: '#F79704',
    marginLeft: 20
  }

});

export default Hoja  