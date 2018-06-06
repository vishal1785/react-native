import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Image source={props.imageURL} style={styles.image}/>
            <Text> {props.placeName} </Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        marginBottom: 5,
        padding: 10,
        backgroundColor: '#eee',
        flexDirection: 'row',
        alignItems:'center'
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10
    }
});

export default listItem;