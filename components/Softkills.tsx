import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export const Softkills = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.texto}>
                ✓ Trabajo en grupo <br />
                ✓ Disposición al cambio <br />
                ✓ Adaptabilidad <br />
                ✓ Comunicación asertiva <br /> 
                ✓ Empatía <br />
                ✓ Responsabilidad <br />
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
        textAlign: 'justify',
    }


})

export default Softkills
