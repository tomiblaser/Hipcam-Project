import * as React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

const CardUser = (props) => (
    <View style={[styles.card, { flexDirection: "column" }]}>

        <View style={[{ flex: 1, borderRadius: 10 }, { flexDirection: 'row' }]}>
            <Image style={[styles.imagenTipo, { flex: 1, height: 48, width: 48 }]} source={require('../assets/users.png')} />
            <Text style={{ flex: 3, marginTop: 30, marginLeft: 10 }}>Usuarios</Text>
            <Text style={{ flex: 3, marginTop: 25, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Total: 24.952{props.total}</Text>
        </View>

        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={[styles.grilla, { flexDirection: 'row' }]}>

                <View style={[{ flex: 50, alignItems: 'center' }, { flexDirection: 'column' }]}>
                    <Text style={{ flex: 1, color: 'white', marginTop: 5, fontWeight: 'bold', fontSize: 18 }}>9.522</Text>
                    <Text style={{ flex: 1, color: '#dddddd' }}>Titulares</Text>
                </View>

                <View style={{ flex: 1, width: 1, height: 60, backgroundColor: "#848484", marginTop: 5 }}></View>

                <View style={[{ flex: 50, alignItems: 'center' }, { flexDirection: 'column' }]}>
                    <Text style={{ flex: 1, color: 'white', marginTop: 5, fontWeight: 'bold', fontSize: 18 }}>14.829</Text>
                    <Text style={{ flex: 1, color: '#dddddd' }}>Compartidos</Text>
                </View>

                <View style={{ flex: 1, width: 1, height: 60, backgroundColor: "#848484", marginTop: 5 }}></View>

                <View style={[{ flex: 50, alignItems: 'center' }, { flexDirection: 'column' }]}>
                    <Text style={{ flex: 1, color: 'white', marginTop: 5, fontWeight: 'bold', fontSize: 18 }}>601</Text>
                    <Text style={{ flex: 1, color: '#dddddd' }}>Restringidos</Text>
                </View>

            </View>
        </View>

        <View style={[{ flex: 1, borderRadius: 10 }, { flexDirection: 'column' }]}>

            <View style={[{ flex: 1, borderRadius: 10, marginTop:5 }, { flexDirection: 'row' }]}>
                <Text style={{ flex: 1, color: "#c70cf5", marginLeft: 12, fontSize: 16, marginTop:10 }}>{'\u25CF'}</Text>
                <Text style={{ flex: 20, fontSize: 16, marginTop:10 }}>Instaladores: 1.786</Text>
            </View>

            <View style={[{ flex: 1, borderRadius: 10 }, { flexDirection: 'row' }]}>
                <Text style={{ flex: 1, color: "#f38402", marginLeft: 12, fontSize: 16 }}>{'\u25CF'}</Text>
                <Text style={{ flex: 20, fontSize: 16 }}>Usuarios de Security Stations: 732</Text>
            </View>

        </View>
    </View>
);

export default CardUser;

const styles = StyleSheet.create({
    card: {
        width: 320,
        height: 246,
        borderRadius: 10,
        backgroundColor: "#f1f1f1",
        marginBottom: 20,
        alignSelf: 'center'

    },
    imagenTipo: {
        position: 'relative',
        width: 50,
        height: 50,
        marginTop: 15,
        marginLeft: 5
    },
    grilla: {
        marginTop: 6,
        width: 300,
        height: 70,
        borderRadius: 5,
        backgroundColor: "#121212"
    }
});