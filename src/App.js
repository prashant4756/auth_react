import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm'


class App extends Component{

    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyD_dZY9JNO-6WiqaHWTkB9ywbNG-_3Qtm4",
            authDomain: "reactauth-d40bf.firebaseapp.com",
            databaseURL: "https://reactauth-d40bf.firebaseio.com",
            projectId: "reactauth-d40bf",
            storageBucket: "reactauth-d40bf.appspot.com",
            messagingSenderId: "266948222661",
            appId: "1:266948222661:web:b70e0c6fc13beb90"
        });
    }

    render(){
        return(
            <View>
                <Header headerTitle="Authentication"></Header>
                <LoginForm />
            </View>
        );
    };
}

export default App;
