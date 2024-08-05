import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export const Educacion = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.texto}>
                    •TECNOLOGO EN ANALISIS Y DESARROLLO DE SOFTWARE <br />
                    Servicio Nacional de Aprendizaje (SENA) <br />
                    Bogotá D.C, Colombia | 01/2024 – presente <br />
                    <br />
                    •TECNICO EN PROGRMACIÓN DE SOFTWARE <br />
                    Bogota D.C, Colombia | 02/2022 - 11/2023 <br />
                    Servicio Nacional de Aprendizaje (SENA) <br />
                    <br />
                    •CURSO EN CODIFICACIÓN Y PROGRAMACIÓN EN PYTHON <br /> 
                    Samsung Electronics Colombia, La Universidad del Rosario y La 
                    Escuela de administración <br />
                    Bogotá D.C, Colombia | 11/2022 - 04/2023 <br /> 
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

export default Educacion
