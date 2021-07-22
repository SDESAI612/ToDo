import React, { useState } from 'react';
import { View, TextInput, Image, TouchableOpacity } from "react-native";
import colors from '../../config/colors';
import strings from '../../config/strings';
import image from "../../assets/index";


const TextBox = (props) => {

    const [secureText, setSecureText] = useState(false);

    return (
        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', borderBottomColor: colors.colorPrimaryDark, borderBottomWidth: 1, justifyContent: 'center' }}>
            <TextInput {...props} style={{ flex: 1, padding: 0, fontSize: 16, paddingBottom: 4 }}
                selectionColor={colors.colorPrimaryDark}
                autoCapitalize="none"
                placeholder={props.placeholder}
                secureTextEntry={props.visibility ? (!secureText) : false}
                onChangeText={props.onInputTextChange}
            >

            </TextInput>
            {props.visibility ?
                <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                    <Image style={{ paddingLeft: 8, height: 20, width: 20, alignSelf: 'flex-end', paddingBottom: 4 }} source={secureText == false ? image.eye : image.hiddenEye} />
                </TouchableOpacity>
                : null
            }
        </View>
    );
}

export default TextBox;