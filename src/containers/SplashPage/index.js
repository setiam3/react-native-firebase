import React, {Component} from 'react';
import {
    View, Text, StyleSheet, ActivityIndicator
} from 'react-native';
import firebase from 'react-native-firebase';

export default class SplashPage extends Component{
    componentDidMount(){
        setTimeout(()=>{
            firebase.auth().onAuthStateChanged(user=>{
                this.props.navigation.navigate(user ? 'Home':'Signup');
            });
        },1000);
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={{fontSize: 40}}>
                    React Gratis Ongkir firebase
                    
                </Text>
                <ActivityIndicator color="blue" size="large"/>
            </View>
        );
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%', height:'100%'
    }
});