import React from 'react';
import { StyleSheet, ImageBackground, Button, Text, View, Image, TextInput, TouchableOpacityBase } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class EWallet extends React.Component {
    render(){
    return (
        <View style={styles.background}>
            <View style={styles.topHead}>
            <TouchableOpacity style={styles.exit} onPress={() => this.props.navigation.navigate('MainMenu')}>
                <Text style={styles.exit1}>X</Text>
            </TouchableOpacity>
                
            </View>
            <TouchableOpacity style={styles.icon} onPress={() => this.props.navigation.navigate('Topup')}>
                <Image style={styles.topup} source={require('../../assets/Slide7.png')}/>
                <Text style={styles.topupText}>TOPUP</Text>
                
            </TouchableOpacity>
        </View>
    );
}
}
const styles = StyleSheet.create({
    background:{
        // justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        height:'100%',
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
    topupText:{
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center',
    },
    icon:{
        marginTop:20,
        width:'100%',
        height:'40%',
        // backgroundColor:'black',
    },
    topup:{
        alignSelf:'center',
        width:120,
        height:120,
    },
    topHead:{
        backgroundColor:'#FDB936',
        width:'100%',
        height:'30%',
        borderBottomEndRadius:30,
        borderBottomLeftRadius:30,
        flexDirection:'row',
    },
    
    
})