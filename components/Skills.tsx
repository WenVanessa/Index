import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export const Skills = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.texto}>
                ✓ HTML <br />
                ✓ CSS <br />
                ✓ PHP <br />
                ✓ Python <br />
                ✓ JavaScript <br />
                ✓ MySQL <br />
                ✓ Java <br />
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

export default Skills
