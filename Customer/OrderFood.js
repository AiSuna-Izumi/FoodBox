import React from 'react';
import { StyleSheet, ImageBackground, Button, Text, View, Image, TextInput } from 'react-native';

export default class OrderFood extends React.Component {
    render() {
    return (
        <View style={styles.background}>
            <View style={styles.topHead}>
                <TextInput style={styles.insert} placeholder="Insert Address">

                </TextInput>
                <Image style={styles.love} source={require('../../assets/iconSet/orderfood/love.png')}></Image>
            </View>
            <TextInput style={styles.craving} placeholder="What are you craving?">

            </TextInput>
            <View style={styles.midBox}>

            </View>
        </View>
    );
}
}
const styles = StyleSheet.create({
    background:{
        alignContent:"center",
        // justifyContent:'center',
        height:'100%',
    },
    midBox:{
        width:'90%',
        height:'30%',
        backgroundColor:'#F6F6F6'
    },
    craving:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        width:"90%",
        height:'8%',
        backgroundColor:"#D9D9D9",
        borderRadius:10,
        marginTop:10,
        alignSelf:'center',
    },
    love:{
        marginLeft:'4%',
        width:72,
        height:65,
    },
    insert:{ 
        fontSize:20,
        fontWeight:'bold',
        backgroundColor:'white',
        width:'60%',
        height:'60%',
        borderRadius:10,
    },
    topHead:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#FEDC5A",
        width:'100%',
        height:'15%',
        marginTop:40,
        borderRadius:20,
        flexDirection:'row',
    },

})
