import * as React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

const CardDevices = (props) => (
    <View style={[styles.card, { flexDirection: "column" }]}>

        <View style={[{ flex: 1, borderRadius: 10 }, { flexDirection: 'row' }]}>
            <Image style={[styles.imagenTipo, { flex: 1, height: 40, width: 40 }]} source={require('../assets/processor.png')} />
            <Text style={{ flex: 3, marginTop: 30, marginLeft: 10 }}>Dispositivos</Text>
            <Text style={{ flex: 3, marginTop: 25, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Total: 483{props.total}</Text>
        </View>

        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={[styles.grilla, { flexDirection: 'row' }]}>

                <View style={[{ flex: 50, alignItems: 'center' }, { flexDirection: 'column' }]}>
                    <Text style={{ flex: 1, color: 'white', marginTop: 5, fontWeight: 'bold', fontSize: 18 }}>226</Text>
                    <Text style={{ flex: 2, color: '#dddddd', marginTop: 4 }}> Doorbell Concierge</Text>
                </View>

                <View style={{ flex: 1, width: 1, height: 60, backgroundColor: "#848484", marginTop: 5 }}></View>

                <View style={[{ flex: 50, alignItems: 'center' }, { flexDirection: 'column' }]}>
                    <Text style={{ flex: 1, color: 'white', marginTop: 5, fontWeight: 'bold', fontSize: 18 }}>237</Text>
                    <Text style={{ flex: 1, color: '#dddddd' }}>Hipboards</Text>
                </View>

                <View style={{ flex: 1, width: 1, height: 60, backgroundColor: "#848484", marginTop: 5 }}></View>

                <View style={[{ flex: 50, alignItems: 'center' }, { flexDirection: 'column' }]}>
                    <Text style={{ flex: 1, color: 'white', marginTop: 5, fontWeight: 'bold', fontSize: 18 }}>20</Text>
                    <Text style={{ flex: 1, color: '#dddddd' }}>Relé BT</Text>
                </View>

            </View>
        </View>

        <View style={[{ flex: 1, borderRadius: 10 }, { flexDirection: 'column' }]}>

            <View style={[{ flex: 1, borderRadius: 10, marginTop:5 }, { flexDirection: 'row' }]}>
                <Text style={{ flex: 1, color: "#3dc25a", marginLeft: 12, fontSize: 16, marginTop:10 }}>{'\u25CF'}</Text>
                <Text style={{ flex: 20, fontSize: 16, marginTop:10 }}>Accesos config. en Hipboards: 948</Text>
            </View>

            <View style={[{ flex: 1, borderRadius: 10 }, { flexDirection: 'row' }]}>
                <Text style={{ flex: 1, color: "#abb90d", marginLeft: 12, fontSize: 16 }}>{'\u25CF'}</Text>
                <Text style={{ flex: 20, fontSize: 16 }}>Accesos config. en Relé BT: 48</Text>
            </View>

        </View>
    </View>
);

export default CardDevices;

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