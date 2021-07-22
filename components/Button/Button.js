import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import colors from '../../config/colors';

const Button = (props) => {

    return (
        <TouchableOpacity onPress={props.buttonPress} >
            <View style={{ width: '100%', height: 50, backgroundColor: colors.colorPrimaryDark, justifyContent: 'center', alignItems: 'center', borderRadius: 7 }} >
                <Text style={{ color: colors.white, fontWeight: 'bold' }}>{props.buttonName}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default Button