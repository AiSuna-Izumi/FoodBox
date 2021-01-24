import React from 'react';
import { StyleSheet, ImageBackground, Button, Text, View, Image, TextInput } from 'react-native';
export default class ResetPass extends React.Component {
    render() {
    return (
        <View style={styles.background}>
            <View style={styles.topHead}>
                <Image style={styles.logo} source={require('../assets/slide1.png')}></Image>
                <Image style={styles.logo1} source={require('../assets/foodBox.png')}></Image>
           </View>

            <Text style={styles.resetPass}>RESET PASSWORD</Text>
            <TextInput style={styles.textIn} placeholder='Phone Number'></TextInput>
            
            <View style={styles.sendText}>
                <Text style={styles.vText}>REGISTER</Text>  
            </View>
            <Text style={styles.bText}>Back To Login</Text>

        </View>
    );
}
}
const styles = StyleSheet.create({
    background: {
        backgroundColor: "white",
        flex: 1,
    },
    bText:{
        marginTop:'40%',
        color:'blue',
        textDecorationLine:'underline',
        marginLeft:"5%",
    },
    vText:{
        textAlign:'center',
        fontSize:25,
    },
    sendText:{
        marginTop:'10%',
        alignSelf:'center',
        justifyContent:'center',
        width:'50%',
        height:'9%',
        borderRadius:50,
        backgroundColor:"rgb(244,129,52)",
    },
    textIn:{
        marginTop:'10%',
        textAlign:'center',
        backgroundColor:'rgb(217,217,217)',
        alignSelf:'center',
        width:'70%',
        fontSize:25,
        height:'10%',
        borderRadius:20,
    },
    resetPass:{
        marginTop:'30%',
        fontSize:40,
        fontWeight:'800',
        textAlign:'center',
    },
    logo:{
        width:'50%',
        height:'100%',
        borderRadius:50,
        borderColor:'black',
    },
    logo1:{
        width:'100%',
        height:'50%',
        position:'absolute',
        alignSelf:'flex-end',
    },
    topHead:{
        marginTop:'8%',
        flexDirection:'row',
        justifyContent:'flex-start',
        height:'20%',
        width:'100%',
        borderRadius:10,
        backgroundColor:"rgb(255,219,89)",
    }
})
