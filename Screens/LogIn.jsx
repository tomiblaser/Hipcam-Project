import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from "react-native";

export default function LogInScreen({ navigation }) {

    const [userState, setUserState] = useState({
        email: 'sdf',
        password: 'sdf',
    });

    const [mensajeError, setMensajeError] = useState("");

    const [mensajeError2, setMensajeError2] = useState("");

    const onPressLogIn = async (e) => {

        if (!userState.email && !userState.password) {

            console.log("Faltan datos. Por favor, agreguelos para continuar.");
            setMensajeError("Ingrese el correo electrónico para continuar")
            setMensajeError2("Ingrese la contraseña para continuar")

        } else if (!userState.email) {

            console.log("Faltan datos. Por favor, agreguelos para continuar.")
            setMensajeError("Ingrese el correo electrónico para continuar")
            setMensajeError2("")

        } else if (!userState.password) {

            console.log("Faltan datos. Por favor, agreguelos para continuar.")
            setMensajeError2("Ingrese la contraseña para continuar")
            setMensajeError("")

        } else {
            navigation.navigate("DashboardScreen")
            setMensajeError("")
            setMensajeError2("")

        }
    }

    return (

        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../assets/logo.png')}
            />
            <View style={styles.login}>
                <Text style={styles.textinput1}>Correo electrónico</Text>

                <TextInput
                    style={styles.input}
                    value={userState.email}
                    onChangeText={text => setUserState({ ...userState, email: text })}
                />

                <Text style={styles.mensajeError}>{mensajeError}</Text>

                <Text style={styles.textinput2}>Contraseña</Text>

                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    value={userState.password}
                    onChangeText={text => setUserState({ ...userState, password: text })}
                />
                <Text style={styles.mensajeError}>{mensajeError2}</Text>

                <TouchableOpacity style={styles.button} onPress={() => onPressLogIn()}>
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
        backgroundColor: '#121212'
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
        height: 500,
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
        marginTop: 60,
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
        backgroundColor: '#121212',
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
        alignSelf: 'center',
        marginTop: 5
    },
    mensajeError: {
        color: 'red',
        marginLeft:35
    }
});