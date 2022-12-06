import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

export default function LogInScreen({ navigation }) {

    return (

        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../assets/logo-negative.png')}
            />
            <View style={styles.login}>
                <Text style={styles.textinput1}>Correo electrónico</Text>
                <TextInput
                    style={styles.input}
                />
                <Text style={styles.textinput2}>Contraseña</Text>
                <TextInput
                    style={styles.input}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textbutton}>Ingresar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 375,
        height: 800,
        backgroundColor: '#14aae1'
    },
    image: {
        width: 220,
        height: 51,
        alignContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        top: 150
    },
    login: {
        width: 360,
        height: 450,
        borderRadius: 19,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 6,
        shadowOpacity: 1,
        position: 'absolute',
        bottom: 0
    },
    input: {
        width: 296,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(0, 0, 0, 0.16)",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 4,
        shadowOpacity: 1,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#d8d8d8",
        alignSelf: 'center'
    },
    textinput1: {
        width: 191,
        height: 16,
        fontSize: 14,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4d4d4d",
        marginTop: 75,
        marginLeft: 35,
        marginBottom: 10

    },
    textinput2: {
        width: 191,
        height: 16,
        fontSize: 14,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#4d4d4d",
        marginTop: 20,
        marginLeft: 35,
        marginBottom: 10

    },
    button: {
        width: 200,
        height: 36,
        borderRadius: 20,
        backgroundColor: '#14aae1',
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 4,
        shadowOpacity: 1,
        alignSelf: 'center',
        marginTop: 15
    },
    textbutton: {
        width: 56,
        height: 20,
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#ffffff",
        alignSelf:'center',
        marginTop:5
    }
});