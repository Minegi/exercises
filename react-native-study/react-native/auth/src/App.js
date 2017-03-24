import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAjYuHPEoh16lMZEJv0UiS-LrXbBodccko',
            authDomain: 'authentication-d232f.firebaseapp.com',
            databaseURL: 'https://authentication-d232f.firebaseio.com',
            storageBucket: 'authentication-d232f.appspot.com',
            messagingSenderId: '72559392955'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
