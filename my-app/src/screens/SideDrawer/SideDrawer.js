import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity,Image } from 'react-native';

class SideDrawerScreen extends Component {

    render() {
        return (
            <View style={[
                styles.drawerContainer,
                { width: Dimensions.get('window').width * 0.8 }
            ]}>
                <TouchableOpacity>
                    <View style={styles.drawerItem}>
                        <Image source={{uri:'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/sign-out-32.png'}} style={styles.drawerItemIcon} />
                        <Text>Sign Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    drawerContainer: {
        paddingTop: 20,
        backgroundColor: 'white',
        flex: 1
    },
    drawerItem: {
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
      backgroundColor: "#eee"
    },
    drawerItemIcon: {
      marginRight: 10,
      width: 30,
      height:30
    }
})

export default SideDrawerScreen;