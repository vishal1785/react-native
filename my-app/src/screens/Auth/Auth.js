import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground,Dimensions } from 'react-native';
import startMainScreen from '../HomeScreen/startMainScreen';
import CustomInputComp from '../../components/UI/CustomInputComp';
import CustomHeaderComp from '../../components/UI/CustomHeaderComp';
import WrapperTextComp from '../../components/UI/WrapperTextComp';
import CustomButtonComp from '../../components/UI/CustomButtonWithBackground';
import backgroundImage from '../../assets/background.jpg';

class AuthScreen extends Component {
    state = {
        viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
    };

    constructor(props) {
        super(props);
        Dimensions.addEventListener("change", this.updateStyles);
    }

    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.updateStyles);
    }

    updateStyles = (dimensions) => {
        this.setState({
            viewMode:
            dimensions.window.height > 500 ? "portrait" : "landscape"
        });
    }

    loginHandler() {
        startMainScreen();
    }

    render() {
        let headingText = null;

        if (this.state.viewMode === "portrait") {
            headingText = (
                <WrapperTextComp>
                    <CustomHeaderComp>Please Log In</CustomHeaderComp>
                </WrapperTextComp>
            );
        }
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.authContainer}>
                    {headingText}
                    <CustomButtonComp color="#29aaf4" onPress={() => alert("Hello")}>
                        Switch to Login
                    </CustomButtonComp>
                    <View style={styles.inputContainer}>
                        <CustomInputComp 
                            placeholder='Enter email' 
                            style={styles.input}
                            autocapitalize={'none'}
                            autoCorrect={false}
                            keyboardType={'email-address'} />
                        <View style={
                            this.state.viewMode === "portrait"
                                ? styles.portraitPasswordContainer
                                : styles.landscapePasswordContainer}>
                            <View style={
                                this.state.viewMode === "portrait"
                                    ? styles.portraitPasswordWrapper
                                    : styles.landscapePasswordWrapper}>
                                <CustomInputComp placeholder='Password' style={styles.input} secureTextEntry/>
                            </View>
                            <View style={
                                this.state.viewMode === "portrait"
                                    ? styles.portraitPasswordWrapper
                                    : styles.landscapePasswordWrapper}>
                                <CustomInputComp placeholder='Confirm password' style={styles.input} secureTextEntry/>
                            </View>
                        </View>
                    </View>
                    <Button title='Submit' onPress={this.loginHandler} />
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    authContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: '#eee',
        borderColor: '#bbb'
    },
    backgroundImage: {
        width: '100%',
        flex: 1
    },
    landscapePasswordContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    portraitPasswordContainer: {
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    landscapePasswordWrapper: {
        width: "45%"
    },
    portraitPasswordWrapper: {
        width: "100%"
    }
})
export default AuthScreen;