import React from 'react';
import { StyleSheet, ImageBackground, Button, Text, View, Image, TextInput, TouchableOpacity, TouchableOpacityBase } from 'react-native';

export default class Login1 extends React.Component {
    render() {
    return (
        <View style={styles.background}>
            <View style={styles.topBox}>
                <Image style={styles.logo} source={require('../assets/logo.png')}></Image>

            </View>
            <Text style={styles.loginText}>LOGIN</Text>

            <View style={styles.insert}>
                <TextInput style={styles.pText} placeholder="Phone Number"></TextInput>
            </View>
            <View style={styles.insert}>
                <TextInput style={styles.pText} placeholder="Password"></TextInput>
            </View>
            
            <TouchableOpacity style={styles.buttonLogin}  onPress={() => this.props.navigation.navigate('MainMenu')}>
                <Text style={styles.LText} >Login</Text>
            </TouchableOpacity>
            
            <View style={styles.botText}>
                <TouchableOpacity style={styles.Ntext}  onPress={() => this.props.navigation.navigate('RegisterAcc')}>
                    <Text>New Here?</Text>
                    <Text>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Mtext}   onPress={() => this.props.navigation.navigate('ResetPass')}>
                    <Text style={styles.textP}>Forgot Password</Text>
                </TouchableOpacity>
                   
            </View>
        
            
        </View>
        
    );
}
}
const styles = StyleSheet.create({
    background: {
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: "rgb(255,219,89)",
        flex: 1,
    },
    logo:{
        width:180,
        height:180,
    },
    Ntext:{
        marginLeft:20,
        position:'absolute',
        textAlign:'left',
    },
    Mtext:{
        alignSelf:'flex-end',
        marginRight:20,
    },
    textP:{
        textAlign:'right',
    },
    botText:{
        flexDirection:'column-reverse',
        marginTop:'10%',
        width:'100%',
        height:'15%',
    },
    buttonLogin:{
        width:"50%",
        height:"10%",
        borderRadius:50,
        marginTop:"5%",
        justifyContent:"center",
        backgroundColor:"#rgb(243,115,51)",
    },
    pText:{
        textAlign:"center",
        fontWeight:"800",
        color:"grey",
    },
    LText:{
        textAlign:"center",
        fontWeight:"800",
        fontSize:30,
        color:"white",
    },
    insert:{
        width:"70%",
        height:"8%",
        borderRadius: 20,
        marginTop:"3%",
        justifyContent:"center",
        backgroundColor:"white",
    },
    loginText:{
        marginTop:"2%",
        fontSize:50,
    },
    topBox:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        marginTop:"10%",
        width:"90%",
        height:"25%",
        backgroundColor: "rgb(255,219,89)",
        flexDirection:'row',
    }
})
