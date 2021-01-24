import React from 'react';
import { StyleSheet, ImageBackground, Button, Text, View, Image, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class PreLogin extends React.Component {
    render(){
    return (
        <View style={styles.background}>
            <Image
                style={styles.backgroundL}
                source={require("../assets/logo.png")}>
            </Image>
            <Text style={styles.welcome}>WHO ARE YOU ?</Text>

            <View style={styles.background2}>
                <View style={styles.firstLayer}>
                    <TouchableOpacity style={styles.text} onPress={() => this.props.navigation.navigate('Login1')}>
                        <Image style={styles.inside} source={require('../assets/Slide2.png')} />
                        <Text style={styles.textInside}>ADMIN</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.text} onPress={() => this.props.navigation.navigate('Login1')}>
                        <Image style={styles.inside} source={require('../assets/Slide3.png')}/>
                        <Text style={styles.textInside}>Customer</Text>
                    </TouchableOpacity>    
                </View>
                
                <View style={styles.firstLayer}>
                <TouchableOpacity style={styles.text} onPress={() => this.props.navigation.navigate('Login1')}>
                        <Image style={styles.inside} source={require('../assets/Slide4.png')}/>
                        <Text style={styles.textInside}>DELIEVERY {'\n'}BOY </Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.text} onPress={() => this.props.navigation.navigate('Login1')}>
                        <Image style={styles.inside} source={require('../assets/Slide5.png')}/>
                        <Text style={styles.textInside}>RESTAURANT {'\n'} MANAGER</Text>
                    </TouchableOpacity> 
                </View>
                
            
            </View>
        </View>
    );
}
}
const styles = StyleSheet.create({
    background2: {
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: "white",
        width:"100%",
        height:"50%",
    },
    textInside:{
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold',
    },
    firstLayer:{
        // marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'80%',
        height:'50%',
    },
    inside:{
        marginTop:20,
        height:120,
        width:120,
    },
    background: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgb(255,219,89)",
        flex: 1,
    },
    welcome: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    backgroundL: {
        width: 230,
        height: 230,
    },
})
