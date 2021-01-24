import React from 'react';``
import { StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity, Touchable } from 'react-native';

export default class FrontPage extends React.Component {
    render(){
    return (
        <ImageBackground style={styles.background}>
            <TouchableOpacity  onPress={() => this.props.navigation.navigate('PreLogin')}>
                <Image
                    style={styles.backgroundL}
                    source={require("../assets/logo.png")}>
                </Image>
            </TouchableOpacity>
            
        </ImageBackground>
    );
}
}

const styles = StyleSheet.create({
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

        width: 300,
        height: 300,
    },

})
