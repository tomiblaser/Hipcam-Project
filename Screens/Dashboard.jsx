import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import { getInfo } from '../Services/DataService';

const DashboardScreen = ({ navigation }) => {

    const [informacion, setInformacion] = useState()

    const hipcamData = async () => {
        getInfo().then((response) => {
            console.log("seteado: " + response["summary"]["buildings"])
            setInformacion(response);
        }).catch((error) => {
            console.log("este error:" + error)
        });
    }

    useEffect(() => {
        (async () => {
            await hipcamData()
        })()
    }, [])

    return (

        <View style={styles.container}>
            <View style={styles.header}>

                <Image
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                />
                <Text style={styles.bienvenido}>Bienvenido, Sebastián</Text>
                <Text>{informacion["summary"]["buildings"]}</Text>
            </View>

            <Text></Text>

        </View>
    )

}
export default DashboardScreen

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
        fontSize: 21,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 1.05,
        textAlign: "left",
        color: "#dddddd"
    }
});