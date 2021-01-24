import { response } from 'express';
import React from 'react';
import { StyleSheet, ImageBackground, Button, Text, View, Image, TextInput, TouchableOpacityBase } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class RegisterAcc extends React.Component {
   
    render(){
    return (
        <View style={styles.background}>
            <View style={styles.topHead}>
                <Image style={styles.logo} source={require('../assets/slide1.png')}></Image>
                <Image style={styles.logo1} source={require('../assets/foodBox.png')}></Image>
           </View>
           <Text style={styles.Register}>REGISTER</Text>
           
           <View style={styles.boxRegister}>
               <View style={styles.box1}>
                   <View style={styles.box2}>
                        <Text>Name:</Text>
                   </View>
                   <TextInput style={styles.textI} onChangeText={ Name => this.setState({Name})}></TextInput>
               </View>
               
               <View style={styles.box1}>
                   <View style={styles.box2}>
                        <Text>Identification No:</Text>
                   </View>
                   <TextInput style={styles.textI} onChangeText={ IC => this.setState({IC})}></TextInput>
               </View>
               
               <View style={styles.box1}>
                   <View style={styles.box2}>
                        <Text>Phone Number:</Text>
                   </View>
                   <TextInput style={styles.textI} onChangeText={ PhoneNo => this.setState({PhoneNo})}></TextInput>
               </View>
               
               <View style={styles.box1}>
                   <View style={styles.box2}>
                        <Text>Verification Code:</Text>
                   </View>
                   <TextInput style={styles.textI}></TextInput>
               </View>
               
               <View style={styles.box1}>
                   <View style={styles.box2}>
                        <Text>Address:</Text>
                   </View>
                   <TextInput style={styles.textI} onChangeText={ Address => this.setState({Address})}></TextInput>
               </View>
               
               <View style={styles.box1}>
                   <View style={styles.box2}>
                        <Text>Email Address:</Text>
                   </View>
                   <TextInput style={styles.textI} onChangeText={Email => this.setState({Email})}></TextInput>
               </View>
               
               <View style={styles.box1}>
                   <View style={styles.box2}>
                        <Text>Password:</Text>
                   </View>
                   <TextInput style={styles.textI} onChangeText={ password => this.setState({password})}></TextInput>
               </View>
               
               <View style={styles.box1}>
                   <View style={styles.box2}>
                        <Text>Confirm Password:</Text>
                   </View>
                   <TextInput style={styles.textI} onChangeText={ passwordC => this.setState({passwordC})}></TextInput>
               </View>
           </View>
        
        
          <TouchableOpacity style={styles.regText} onPress={this.RegAcc}>
            <Text >REGISTER</Text>  
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => this.props.navigation.navigate('Login1')}>
          <Text style={styles.bText}>Back To Login</Text>
          </TouchableOpacity>
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
        color:'blue',
        textDecorationLine:'underline',
        marginLeft:"2%",
    },
    regText:{
        alignItems:'center',
        marginTop:'10%',
        alignSelf:'flex-end',
        justifyContent:'center',
        textAlign:'center',
        width:110,
        height:40,
        borderRadius:20,
        backgroundColor:"rgb(244,129,52)",
    },
    box2:{
        marginLeft:'5%',
        width:'30%',
        textAlign:'right',
        justifyContent:'center',
    },
    textI:{
        borderRadius:5,
        marginLeft:'5%',
        width:'55%',
        backgroundColor:'rgb(217,217,217)',
    },
    box1:{
        flexDirection:'row',
        width:'100%',
        height:'8%',
        
    },
    boxRegister:{
        marginTop:'7%',
        width:'100%',
        height:'50%',
        // backgroundColor:'aqua',
        justifyContent:'space-between',
    },
    Register:{
        marginTop:10,
        fontWeight:'bold',
        fontSize:40,
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
        flexDirection:'row',
        justifyContent:'flex-start',
        height:'20%',
        width:'100%',
        borderRadius:10,
        backgroundColor:"rgb(255,219,89)",
    }
})