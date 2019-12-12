import React, {Component} from 'react';
import {
    View, Text, StyleSheet, ActivityIndicator,Button,TextInput,ToastAndroid
} from 'react-native';
import firebase from 'react-native-firebase';

export default class Home extends Component{
    state={
        currentUser:null
    }
    componentDidMount(){
        const {currentUser}=firebase.auth();
        this.setState({currentUser});
    }
    signOutnow=()=>{
        firebase.auth().signOut().then(this.props.navigation.navigate('Signup'));
    }

    render(){
        return(
            <View >
                <Text>Wellcome to Gratis Ongkir</Text>
                <Button title="Logout" onPress={this.signOutnow()}/>
                
            </View>
        );
    }
}

const style=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    }
});