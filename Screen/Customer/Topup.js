import React from 'react';
import { StyleSheet, ImageBackground, Button, Text, View, Image, TextInput,TouchableOpacity } from 'react-native';

export default class Topup extends React.Component {
    render() {
    return (
        <View style={styles.background}>
            <View style={styles.topHead}>
            <TouchableOpacity style={styles.exit} onPress={() => this.props.navigation.navigate('MainMenu')}>
                <Text style={styles.exit1}>X</Text>
            </TouchableOpacity>
                <View style={styles.wallet}>
                    <Text style={styles.walletText}>Wallet</Text>
                    <Text style={styles.balanceText}>Balance (RM)</Text>

                </View>
            
            
            
            
            </View>
            <View>

            </View>

            <View>

            </View>

        </View>
    );
}
}
const styles = StyleSheet.create({
    background:{
        // justifyContent:'center',
        alignContent:'center',
        height:'100%',
    },
    walletText:{
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold',
    },
    balanceText:{
        fontSize:15,
    },
    wallet:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        width:'40%',
        height:'100%',
        // backgroundColor:'white',
        alignContent:'center',
        marginLeft:'30%',
    },
    exit:{
        marginLeft:20,
        marginTop:50,
        // position:'absolute',
        fontSize:50,
        fontWeight:'bold',
        textAlign:'left',
    },
    exit1:{
        fontSize:50,
        fontWeight:'bold',
    },
    topHead:{
        // alignItems:'center',
        backgroundColor:'#FDB936',
        width:'100%',
        height:'30%',
        borderBottomEndRadius:30,
        borderBottomLeftRadius:30,
        flexDirection:'row',
    },
})
