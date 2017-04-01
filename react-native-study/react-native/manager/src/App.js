import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import reducers from './reducers';
import LoginForm from './components/LoginForm';

export default class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyATdUTpt04NOM2k7SMJuSElV384cUC__nM',
            authDomain: 'manager-44ab8.firebaseapp.com',
            databaseURL: 'https://manager-44ab8.firebaseio.com',
            storageBucket: 'manager-44ab8.appspot.com',
            messagingSenderId: '682322540464'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}
