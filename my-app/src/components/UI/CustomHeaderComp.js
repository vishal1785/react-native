import React from 'react';
import { Text, StyleSheet } from 'react-native';

const headerComp = props => (
    <Text
        {...props}
        style={[styles.header, props.style]}>
        {props.children}
    </Text>
);

const styles = StyleSheet.create({
    header: {
        fontWeight: 'bold',
        fontSize: 28
    }
})

export default headerComp;