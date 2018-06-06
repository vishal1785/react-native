import React, { Component } from 'react';
import { View, Button, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { addPlace } from '../../store/actions/index';
import PlaceInputComponent from '../../components/PlaceInputComp/PlaceInputComp';
import CustomHeaderComp from '../../components/UI/CustomHeaderComp';
import PickImageComp from '../../components/PickImage/PickImage';
import PickLocationComp from '../../components/PickLocation/PickLocation';

class SharePlaceScreen extends Component {

    static navigatorStyle = {
        navBarButtonColor: 'blue'
    }

    state = {
        placeName: '',
        location: {
            value: null
        },
        image: {
            value: null
        }
    };

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);

        this.inputElement = React.createRef();
    }

    onNavigatorEvent = (event) => {
        if (event.type === 'NavBarButtonPress') {
            if (event.id === 'sideToggle') {
                this.props.navigator.toggleDrawer({
                    side: 'left'
                })
            }
        }
    }

    placeNameChangedHandler = val => {
        this.setState({
            placeName: val,
        });
    };

    addPlaceHandler = () => {
        this.props.onAddPlace(
            this.state.placeName,
            this.state.location.value,
            this.state.image.value
        );

        // placed a ref to the textinput element - get the current dom and clear text 
        alert('Place added successfully');
        this.inputElement.current.clear();
    }

    imagePickedHandler = img => {
        this.setState(prevState => {
            return {
                image: {
                    ...prevState.image,
                    value: img,
                }
            };
        });
    };

    locationPickedHandler = loc => {
        this.setState(prevState => {
            return {
                location: {
                    ...prevState.location,
                    value: loc,
                }
            };
        });
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <CustomHeaderComp> Please share a place with us </CustomHeaderComp>
                    <PickImageComp onImagePick={this.imagePickedHandler} />
                    <PickLocationComp onLocationPick={this.locationPickedHandler} />
                    <PlaceInputComponent
                        inputRef={this.inputElement}
                        placeName={this.state.placeName}
                        onChangeText={this.placeNameChangedHandler} />
                    <View style={styles.button}>
                        <Button title="Share the Place!" onPress={this.addPlaceHandler} />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    button: {
        margin: 8
    }
});

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPlace: (placeName, location, image) => dispatch(addPlace(placeName, location, image))
    };
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);