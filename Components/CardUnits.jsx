import * as React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

const CardUnit = (props) => (
    <View style={[styles.card, { flexDirection: "column" }]}>

        <View style={[{ flex: 1, borderRadius: 10 }, { flexDirection: 'row' }]}>
            <Image style={[styles.imagenTipo, { flex: 1, height: 40, width: 40 }]} source={require('../assets/home.png')} />
            <Text style={{ flex: 3, marginTop: 30, marginLeft: 10 }}>Unidades</Text>
            <Text style={{ flex: 3, marginTop: 25, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Total: 8.300{props.total}</Text>
        </View>

        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={[styles.grilla, { flexDirection: 'row' }]}>

                <View style={[{ flex: 50, alignItems: 'center' }, { flexDirection: 'column' }]}>
                    <Text style={{ flex: 1, color: 'white', marginTop: 5, fontWeight: 'bold', fontSize: 18 }}>7.689</Text>
                    <Text style={{ flex: 1, color: '#dddddd' }}>Viviendas</Text>
                </View>

                <View style={{ flex: 1, width: 1, height: 60, backgroundColor: "#848484", marginTop: 5 }}></View>

                <View style={[{ flex: 50, alignItems: 'center' }, { flexDirection: 'column' }]}>
                    <Text style={{ flex: 1, color: 'white', marginTop: 5, fontWeight: 'bold', fontSize: 18 }}>558</Text>
                    <Text style={{ flex: 1, color: '#dddddd' }}>Especiales</Text>
                </View>

                <View style={{ flex: 1, width: 1, height: 60, backgroundColor: "#848484", marginTop: 5 }}></View>

                <View style={[{ flex: 50, alignItems: 'center' }, { flexDirection: 'column' }]}>
                    <Text style={{ flex: 1, color: 'white', marginTop: 5, fontWeight: 'bold', fontSize: 18 }}>53</Text>
                    <Text style={{ flex: 1, color: '#dddddd' }}>Monitoreo</Text>
                </View>

            </View>
        </View>

        <View style={[{ flex: 1, borderRadius: 10 }, { flexDirection: 'column' }]}>

            <View style={[{ flex: 1, borderRadius: 10, marginTop:5 }, { flexDirection: 'row' }]}>
                <Text style={{ flex: 1, color: "#f66262", marginLeft: 12, fontSize: 16, marginTop:10 }}>{'\u25CF'}</Text>
                <Text style={{ flex: 20, fontSize: 16, marginTop:10 }}>Vacías: 2.026</Text>
            </View>

            <View style={[{ flex: 1, borderRadius: 10 }, { flexDirection: 'row' }]}>
                <Text style={{ flex: 1, color: "#3eef85", marginLeft: 12, fontSize: 16 }}>{'\u25CF'}</Text>
                <Text style={{ flex: 20, fontSize: 16 }}>Ocupadas: 6.238</Text>
            </View>

        </View>
    </View>
);

export default CardUnit;

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
        width: 40,
        height: 40,
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