import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export const Perfil = () => {
    return (
      <View>
        <View style={styles.container}>
            <Text style={styles.texto}>
                Soy técnico en programación de
                software con experiencia en HTML, CSS
                y PHP y preparación adicional en
                Python y otras tecnologías, estoy
                mejorando mis habilidades mientras
                estudio un tecnólogo en análisis y
                desarrollo de software.
            </Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({

    container: {
        paddingTop: 10,
    },
    
    texto:{
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    }


})

export default Perfil