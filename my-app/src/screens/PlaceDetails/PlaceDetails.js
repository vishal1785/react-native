import React, { Component } from "react";
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import { View, Image, Text, Button, StyleSheet } from "react-native";
import { deletePlace } from '../../store/actions/index';

class PlaceDetails extends Component {

  placeDeleteHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={this.props.selectedPlace.imagePath} style={styles.placeImage} />
          <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
        </View>
        <MapView
          style={styles.map}
          initialRegion={{
            ...this.props.selectedPlace.location,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }} >
          <MapView.Marker coordinate={this.props.selectedPlace.location} />
        </MapView>
        <View>
          <Button title="Delete" color="red" onPress={this.placeDeleteHandler} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  map: {
    width: '100%',
    height: 200
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
    onDeletePlace: (key) => dispatch(deletePlace(key))
  };
}

export default connect(null, mapDispatchToProps)(PlaceDetails);
