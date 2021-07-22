import React, { useState } from 'react';

import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, Keyboard } from "react-native";
import styles from "./SignUp.style";
import colors from "../../config/colors";
import strings from "../../config/strings";
import Button from "../../components/Button/Button"
import TextBox from "../../components/TextBox/TextBox";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import globalStyle from '../../globalStyles';
import { validateEmail, validateField, validatePassword } from '../../config/validation'

const SignUp = (props) => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [emailError, setEmailError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPassError, setConfirmPassError] = useState(false);



    const checkValidation = () => {
        let isValid = true;
        setEmailError(false);
        setNameError(false);
        setConfirmPassError(false);
        setPasswordError(false);
        Keyboard.dismiss();
        if (!validateEmail(email.trim())) {
            isValid = false;
            setEmailError(true);
        }
        if (!validateField(name.trim())) {
            isValid = false;
            setNameError(true);
        }
        if (!validatePassword(password.trim())) {
            isValid = false;
            setPasswordError(true)
        } if (!validatePassword(confirmPass.trim())) {
            isValid = false;
            setConfirmPassError(true);
        }
        if (isValid === false) {
            // call api / firebase
            console.log("There are some error in the fields")

        } else {
            console.log('There are no errors ')
        }

    }


    return (
        <View style={globalStyle.container}>
            <AuthHeader />
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} >

                <Text style={styles.emailText} >{strings.name}</Text>
                <View style={{ marginBottom: 32 }} >
                    <TextBox
                        contextType={'default'}
                        placeholder={strings.namePlaceHolder}
                        onInputTextChange={
                            input => setName(input)
                        }
                    />
                    {
                        nameError ? <Text style={styles.errorText}>{strings.nameError}</Text> : null}
                </View>
                <Text style={styles.emailText} >{strings.email}</Text>
                <View style={{ marginBottom: 32 }} >
                    <TextBox
                        contextType={'emailAddress'}
                        placeholder={strings.emailPlaceHolder}
                        onInputTextChange={
                            input => setEmail(input)
                        }
                    />
                    {
                        emailError ? <Text style={styles.errorText} >{strings.emailError}</Text> : null}
                </View>
                <Text style={styles.emailText} >{strings.password}</Text>
                <View style={{ marginBottom: 32 }}>
                    <TextBox
                        contextType={'password'}
                        placeholder={strings.passwordPlaceHolder}
                        visibility={true}
                        onInputTextChange={
                            input => setPassword(input)
                        }
                    />
                    {
                        passwordError ? <Text style={styles.errorText} >{strings.passwordError}</Text> : null}
                </View>
                <Text style={styles.emailText} >{strings.confirmPass}</Text>
                <View style={{ marginBottom: 64 }} >
                    <TextBox
                        contextType={'password'}
                        placeholder={strings.confirmPassPlaceHolder}
                        visibility={true}
                        onInputTextChange={
                            input => setConfirmPass(input)
                        }
                    />
                    {
                        confirmPassError ? <Text style={styles.errorText} >{strings.confirmPassError}</Text> : null}
                </View>
                <Button
                    buttonName={strings.signUpButton}
                    buttonPress={checkValidation}
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
                    <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
                        <Text style={{ color: colors.colorPrimaryDark }}>
                            {strings.signUp}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

export default SignUp