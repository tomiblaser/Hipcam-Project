import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

export default function DashboardScreen({ navigation }) {

    return (

        <View style={styles.container}>
            <View style={styles.header}>

                <Image
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                />
                <Text style={styles.bienvenido}>Bienvenido, Sebastián</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#dddddd"
    },
    header: {
        height: 148,
        backgroundColor: "#121212",
        borderRadius: 15
    },
    logo: {
        width: 85,
        height: 20,
        alignSelf: 'center',
        marginVertical: 60
    },
    bienvenido: {
        fontFamily: "Inter-Regular",
        fontSize: 21,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 1.05,
        textAlign: "left",
        color: "#dddddd"
    }
});