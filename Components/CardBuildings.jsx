import * as React from 'react';
import { View, Text, StyleSheet, Image} from "react-native";

const CardBuilding = (props) => (
    <View style={[styles.card, { flexDirection: "column" }]}>

    <View style={[{ flex: 1, borderRadius: 10 }, { flexDirection: 'row' }]}>
        <Image style={[styles.imagenTipo, { flex: 1 }]} source={require('../assets/edificios.png')} />
        <Text style={{ flex: 2, marginTop: 35, marginLeft: 5 }}>Edificios</Text>
        <Text style={{ flex: 2, marginTop: 30, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Total: 166{props.total}</Text>
    </View>

    <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={[styles.grilla, { flexDirection: 'row' }]}>

            <View style={[{ flex: 50, alignItems: 'center' }, {flexDirection:'column'}]}>
                <Text style={{ flex: 1, color:'white', marginTop:5, fontWeight:'bold', fontSize:18}}>45</Text>
                <Text style={{ flex: 1, color:'#dddddd'}}>Argentina</Text>
            </View>

            <View style={{ flex: 1, width: 1,height: 60, backgroundColor: "#848484", marginTop:5}}></View>

            <View style={[{ flex: 50, alignItems: 'center' }, {flexDirection:'column'}]}>
                <Text style={{ flex: 1, color:'white', marginTop:5, fontWeight:'bold', fontSize:18}}>38</Text>
                <Text style={{ flex: 1, color:'#dddddd'}}>Brasil</Text>
            </View>

            <View style={{ flex: 1, width: 1,height: 60, backgroundColor: "#848484", marginTop:5}}></View>

            <View style={[{ flex: 50, alignItems: 'center' }, {flexDirection:'column'}]}>
                <Text style={{ flex: 1, color:'white', marginTop:5, fontWeight:'bold', fontSize:18}}>27</Text>
                <Text style={{ flex: 1, color:'#dddddd'}}>Colombia</Text>
            </View>

        </View>
    </View>

    <View style={{ flex: 1, alignItems: 'center', borderRadius: 10 }}>
        <View style={[styles.grilla, { flexDirection: 'row' }]}>

            <View style={[{ flex: 50, alignItems: 'center' }, {flexDirection:'column'}]}>
                <Text style={{ flex: 1, color:'white', marginTop:5, fontWeight:'bold', fontSize:18}}>25</Text>
                <Text style={{ flex: 1, color:'#dddddd', fontStyle:'italic'}}>Mexico</Text>
            </View>

            <View style={{ flex: 1, width: 1,height: 60, backgroundColor: "#848484", marginTop:5}}></View>

            <View style={[{ flex: 50, alignItems: 'center' }, {flexDirection:'column'}]}>
                <Text style={{ flex: 1, color:'white', marginTop:5, fontWeight:'bold', fontSize:18}}>18</Text>
                <Text style={{ flex: 1, color:'#dddddd', fontStyle:'italic'}}>Chile</Text>
            </View>

            <View style={{ flex: 1, width: 1,height: 60, backgroundColor: "#848484", marginTop:5}}></View>

            <View style={[{ flex: 50, alignItems: 'center' }, {flexDirection:'column'}]}>
                <Text style={{ flex: 1, color:'white', marginTop:5, fontWeight:'bold', fontSize:18}}>13</Text>
                <Text style={{ flex: 1, color:'#dddddd', fontStyle:'italic'}}>LATAM</Text>
            </View>

        </View>
    </View>
</View>
);

export default CardBuilding;

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
        width: 55,
        height: 55,
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