import React, { Components } from 'react';

import {
    Image
} from 'react-native';

import styles from './style.js';

export default class PhotoBackdrop extends Component {
    render() {
        return (
            <Image
                style={styles.backdrop}
                source={require('./flowers.png')}
                resizeMode='cover'>
                {this.props.children}
            </Image>
        );
    }
}