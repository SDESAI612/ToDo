import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from "react-native";
import styles from "./SignIn.style";
import colors from "../../config/colors";
import strings from "../../config/strings";
import Button from "../../components/Button/Button"
import TextBox from "../../components/TextBox/TextBox";
import AuthHeader from "../../components/AuthHeader/AuthHeader";

const SignIn = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <View style={styles.container} >
                <AuthHeader />
                <ScrollView style={styles.scrollView} scrollEnabled={false} >
                    <Text style={styles.emailText} >{strings.email}</Text>
                    <View style={{ marginBottom: 32 }} >
                        <TextBox
                            contextType={'emailAddress'}
                            placeholder={strings.emailPlaceHolder}
                            onInputTextChange={
                                input => setEmail(input)
                            }
                        />
                    </View>
                    <Text style={styles.emailText} >{strings.password}</Text>
                    <View style={{ marginBottom: 64 }}>
                        <TextBox
                            contextType={'password'}
                            placeholder={strings.passwordPlaceHolder}
                            visibility={true}
                            onInputTextChange={
                                input => setPassword(input)
                            }
                        />
                    </View>
                    <Button
                        buttonName={strings.signInButton}
                    />
                    <TouchableOpacity>
                        <Text style={styles.forgotPassText} >{strings.forgotPassword}</Text>
                    </TouchableOpacity>
                    <Button
                        buttonName={strings.SignInGoogleButton}
                    />
                    <View style={styles.footerView} >
                        <Text>
                            {strings.forgotPassword}{'   '}
                        </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
                            <Text style={{ color: colors.colorPrimaryDark }}>
                                {strings.signUp}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>

        </>
    )
}

export default SignIn;