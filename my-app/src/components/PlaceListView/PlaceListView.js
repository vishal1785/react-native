import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../ListItem/ListItem';

const placesListView = (props) => {
    return (
        <FlatList
            style={styles.placeListContainer}
            data={props.places}
            keyExtractor = {(item) => item.toString()}
            renderItem={({item}) => (
                <ListItem 
                    placeName={item.name}
                    imageURL = {item.imagePath}
                    onItemPressed={() => props.onItemSelected(item.key)}/>
            )} 
        />
    );
};
const styles = StyleSheet.create({
    placeListContainer: {
        width: '100%'
    }
});

export default placesListView;