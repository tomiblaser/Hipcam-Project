import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { getInfo } from '../Services/DataService';
import CardBuilding from '../Components/CardBuildings';
import CardUnit from '../Components/CardUnits';
import CardUser from '../Components/CardUsers';
import CardDevices from '../Components/CardDevices';

const DashboardScreen = ({ navigation }) => {

    const [informacion, setInformacion] = useState()

    const hipcamData = async () => {
        getInfo().then((response) => {
            console.log("Tomi" + response["summary"]["buildings"]);
            setInformacion(response);
            console.log("Seba" + informacion["summary"]["buildings"]);
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

        <ScrollView style={styles.container}>
            <View style={styles.header}>

                <Image
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                />

            </View>
            
            <CardBuilding
            //total = {informacion["summary"]["buildings"]}
            />

            <CardUnit
            //total = {informacion["summary"]["buildings_units"]}
            />

            <CardUser
            //total = {informacion["summary"]["buildings_units"]}
            />

            <CardDevices
            //total = {informacion["summary"]["-"]}
            />

        </ScrollView>
    )

}
export default DashboardScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#dddddd",
        width: 360,
        height: 1281,
    },
    header: {
        width: 360,
        height: 120,
        backgroundColor: "#121212",
        borderRadius: 15,
        marginBottom: 20
    },
    logo: {
        width: 100,
        height: 24,
        alignSelf: 'center',
        marginTop: 60
    }

});