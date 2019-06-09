import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, ProgressBar, CardSection } from './components/common';
import LoginForm from './components/LoginForm'


class App extends Component{

    state = {loggedIn: null};

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

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({loggedIn: true})
            }else{
                this.setState({loggedIn: false})
            }
        });
    }

    handleLoggedIn(){
        switch(this.state.loggedIn){
            case true: {
                return(
                    <CardSection>
                        <Button onPress={this.onLogoutClicked.bind(this)}>
                            Log Out!
                        </Button>
                    </CardSection>
                    
                );
            }
            case false: {
                return <LoginForm />
            }
            default: {
                return(
                    <View style={styles.progressContainerStyle}>
                        <ProgressBar />
                    </View>
                );
            }
        }
    }

    onLogoutClicked(){
        firebase.auth().signOut()
        .then(this.setState({ loggedIn: null }));
    }

    render(){
        return(
            <View>
                <Header headerTitle="Authentication"></Header>
                {this.handleLoggedIn()}
            </View>
        );
    };
}

const styles = {
    progressContainerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export default App;
