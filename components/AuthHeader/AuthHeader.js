import React from 'react';
import { View, Image } from 'react-native';
import styles from './AuthHeader.style';
import Images from "../../assets/index";


const AuthHeader = () => {
    return (
        <View style={styles.header} >
            <Image style={styles.userIcon} source={Images.userLogo} />
        </View>
    );
}

export default AuthHeader;