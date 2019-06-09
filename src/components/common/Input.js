import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ placeholder, label, value, secureTextEntry, onChangeText }) => {
    const {containerStyle, labelStyle, inputStyle} = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}> {label} </Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle} />
        </View>
    );
};

const styles = {
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputStyle: {
        color: '#000',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize:18,
        lineHeight: 22,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    }
}

export { Input };
