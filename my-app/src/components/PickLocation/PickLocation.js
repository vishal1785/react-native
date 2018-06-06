import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MapView from 'react-native-maps';

class PickLocationComp extends Component {

    state = {
        location: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
        },
        locationChosen: false
    }

    constructor(props) {
        super(props);
        this.mapElement = React.createRef();
    }

    pickLocationHandler = event => {
        const coords = event.nativeEvent.coordinate;

        this.mapElement.current.animateToRegion({
            ...this.state.location,
            latitude: coords.latitude,
            longitude: coords.longitude
        }, 1000)

        this.setState(prevState => {
            return {
                location: {
                    ...prevState.location,
                    latitude: coords.latitude,
                    longitude: coords.longitude
                },
                locationChosen: true
            }
        });

        // set location to persist on redux store
        this.props.onLocationPick({
            latitude: coords.latitude,
            longitude: coords.longitude
        });
    }

    getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(position => {
            const coordsEvent = {
                nativeEvent: {
                    coordinate: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    }
                }
            };
            this.pickLocationHandler(coordsEvent);
        },
            err => {
                console.log(err);
                alert('`Fetching location failed !!')
            })
    }

    render() {
        let marker = null;

        if (this.state.locationChosen) {
            marker = <MapView.Marker coordinate={this.state.location} />
        }

        return (
            <View style={styles.container}>
                <MapView
                    ref={this.mapElement}
                    style={styles.map}
                    initialRegion={this.state.location}
                    onPress={this.pickLocationHandler} >
                    {marker}
                </MapView>
                <View style={styles.button}>
                    <Button title="Locate Me" onPress={this.getCurrentLocation} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: 'center'
    },
    map: {
        width: '100%',
        height: 300
    },
    button: {
        margin: 10
    }

});

export default PickLocationComp;