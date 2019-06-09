import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, ProgressBar } from './common'


class LoginForm extends Component{
    state = {email:'', password: '', error: '', loading: false}

    onButtonPress(){
        this.setState({ error: '', loading: true })
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFailed.bind(this))
        });
    }

    onLoginFailed(){
        this.setState({  })
        this.setState({ 
            error: 'Authentication failed',
            loading: false
        })
    }

    onLoginSuccess(){
        this.setState({
            error: '',
            password: '',
            email: '',
            loading: false
        })
    }

    renderButton(){
        if(this.state.loading){
            return <ProgressBar size='small'/>
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Log In
            </Button>
        );
    }

     render(){
         return(
            <Card>
                <CardSection>
                    <Input 
                        placeholder = "user@gmail.com"
                        label="Email ID"
                        value={this.state.email}
                        onChangeText={text => this.setState({ email: text })} 
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry
                        placeholder = "password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })} 
                    />
                </CardSection>

                <Text style={styles.errorStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    { this.renderButton() }
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}



export default LoginForm;
