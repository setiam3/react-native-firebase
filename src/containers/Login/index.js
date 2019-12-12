import React, {Component} from 'react';
import {
    View, Text, StyleSheet, ActivityIndicator,Button,TextInput,ToastAndroid
} from 'react-native';
import firebase from 'react-native-firebase';

export default class Login extends Component{
    state={
        email:'',
        password:'',
        errorMessage:null,
    };
    signinNow=()=>{
        if(this.state.email && this.state.password){
            firebase.auth().signInWithEmailAndPassword(
                this.state.email, this.state.password
            ).then(()=>this.props.navigation.navigate('Home'))
            .catch(error=>this.setState({errorMessage:error.message}));

        }else{
            ToastAndroid.show('Please Fill in your data');
        }
    };

    render(){
        return(
            <View style={style.container}>
                <Text>Signin Now</Text>
                <TextInput
                    placeholder="Email"
                    style={style.textInput}
                    onChangeText={email=>this.setState({email})}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    style={style.textInput}
                    onChangeText={password=>this.setState({password})}
                    value={this.state.password}
                />
                {this.state.errorMessage && (
                    <Text style={{color:'red'}}>
                        {this.state.errorMessage}
                    </Text>
                )}
                <View>
                    <Button title="Signin Now" color="blue" onPress={this.signinNow()}/>
                </View>
            </View>
        );
    }
}

const style=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:20,
    },
    textInput:{
        height:40,
        fontSize:20,
        width:'90%',
        borderColor:'#9b9b9b',
        borderBottomWidth:1,
        marginTop:10,
        marginVertical:16,
    }
});