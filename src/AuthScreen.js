import React, {Component} from 'react';
import {
    View,
    Text,
    ImageBackground
} from 'react-native';

import Login from './Login';
import SignupWithEmail from './SignupWithEmail';
import SignupWithMobile from './SignupWithMobile';

export default class AuthScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authMode: 'login'
        };
    }

    getAuthFragment = () => {
        if (this.state.authMode === 'signUpWithMobile') {
            return <SignupWithMobile onFragmentChange={this.onFragmentChange}/>
        }else if (this.state.authMode === 'signUpWithEmail') {
            return <SignupWithEmail onFragmentChange={this.onFragmentChange}/>
        }else {
            return <Login onFragmentChange={this.onFragmentChange}/>
        }
    };

    onFragmentChange = (index) => {
        if (index === 1) {
            this.setState({
                authMode: 'signUpWithEmail'
            });
        } else if (index === 2) {
            this.setState({
                authMode: 'signUpWithMobile'
            });
        } else {
            this.setState({
                authMode: 'login'
            });
        }
    };

    render() {
        return (
            <ImageBackground
                source={require('../assets/img/auth_bg.png')}
                resizeMode='stretch'
                style={{
                    width: '100%',
                    height: '100%',
                    flexDirection: 'column',
                    backgroundColor: 'transparent',
                    justifyContent: 'flex-start',
                }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                }}>
                    <View style={{
                        height: '70%'
                    }}>

                        {this.getAuthFragment()}

                    </View>
                </View>
            </ImageBackground>
        );
    }
}
