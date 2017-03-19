import { StyleSheet } from 'react-native'

const baseFontSize = 18;

var styles = StyleSheet.create({
    bigText: {
        fontSize: baseFontSize + 8,
        color: '#ffffff'
    },
    mainText: {
        fontSize: baseFontSize,
        color: '#ffffff'
    }
});

// 다른 파일에서 사용할 수 있도록 지정
styles['baseFontSize'] = baseFontSize;

export default styles;