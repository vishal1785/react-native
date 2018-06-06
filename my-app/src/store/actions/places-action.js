import { ADD_PLACE, DELETE_PLACE} from '../actions/actiontypes';

export const addPlace = (name,location,image) => {
    return {
        type: ADD_PLACE,
        placeName: name,
        location:location,
        image:image
    }
};

export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        placeKey: key
    }
};
