import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import CustomInputComp from '../UI/CustomInputComp';

const PlaceInputComponent = props => (
    <CustomInputComp
        inputRef={props.inputRef}
        placeholder="Enter a place"
        value={props.placeName}
        onChangeText={props.onChangeText} />

);

export default PlaceInputComponent;