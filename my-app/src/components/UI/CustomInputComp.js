import  React from 'react';
import {TextInput,StyleSheet,Keyboard} from 'react-native';

const inputComp = props =>(
    <TextInput
    ref={props.inputRef}
    {...props} 
    underlineColorAndroid='transparent'
    style={[ styles.inputContainer, props.style]}
    onSubmitEditing={Keyboard.dismiss} />
);

const styles = StyleSheet.create({
    inputContainer:{
        width : '100%',
        padding : 5,
        marginTop : 10,
        marginBottom : 10,
        borderWidth : 1,
        borderColor : '#eee'
    }
})

export default inputComp;