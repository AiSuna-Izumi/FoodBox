import React from 'react';
import { StyleSheet, ImageBackground, Button, Text, View, Image, TextInput, TouchableOpacity, TouchableOpacityBase } from 'react-native';

export default class MainMenu extends React.Component {
    render(){
    return (
        <View style={styles.background}>
            <View style={styles.topHead}>
                <Image style={styles.logo} source={require('../../assets/slide1.png')}></Image>
                <Image style={styles.logo1} source={require('../../assets/foodBox.png')}></Image>
           </View>

            <View style={styles.mainMenu}>
                <Text style={styles.mainMenuT}>MAIN MENU</Text>
            </View>

            <TouchableOpacity style={styles.moneyBar}  onPress={() => this.props.navigation.navigate('EWallet')}>
                <View style={styles.point}>

                </View>
                <View style={styles.point}>

                </View>
            </TouchableOpacity>
            
                <TouchableOpacity style={styles.OrderFood} onPress={() => this.props.navigation.navigate('OrderFood')}>
                    <Image style={styles.food} source={require("../../assets/iconSet/icon/3-removebg-preview.png")}></Image>
                    <Text style={styles.menuText}>ORDER FOOD</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.OrderFood}>
                    <Image style={styles.food} source={require("../../assets/iconSet/icon/4-removebg-preview.png")}></Image>
                    <Text style={styles.menuText}>ORDER PROGRESS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.OrderFood}>
                    <Image style={styles.food} source={require("../../assets/iconSet/icon/5-removebg-preview.png")}></Image>
                    <Text style={styles.menuText}>ORDER HISTORY</Text>
                </TouchableOpacity>
           <TouchableOpacity style={styles.exit} onPress={() => this.props.navigation.navigate('Login1')}>
               <Image style={styles.exit1} source={require("../../assets/iconSet/icon/logout.png")}>

               </Image>
           </TouchableOpacity>
        
        </View>

    );
    }
}
const styles = StyleSheet.create({
    background: {
        backgroundColor: "white",
        flex: 1,
        alignItems:'center',
    },
    exit:{
        width:'25%',
        alignSelf:'flex-end',
        marginTop:'25%',
    },
    menuText:{
        position:'absolute',
        marginLeft:100,
        fontSize:20,
        fontWeight:'bold',
    },
    OrderFood:{
        alignItems:'center',
        flexDirection:'row',
        borderRadius:20,
        marginTop:10,
        height:'10%',
        width:'70%',
        backgroundColor:'#FFEBEA',
    },
    point:{
        borderRadius:10,
        marginTop:10,
        width:'50%',
        height:'80%',
        backgroundColor:'#ECEDDA',
    },
    moneyBar:{
        flexDirection:'row',
        width:'100%',
        height:'10%',
    },
    mainMenuT:{
        fontSize:50,
        fontWeight:'bold',
    },
    mainMenu:{
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        width:'100%',
        height:'10%',
        backgroundColor:'#F37335',
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
        height:'17%',
        width:'100%',
        borderRadius:10,
        backgroundColor:"rgb(255,219,89)",
    }
})
