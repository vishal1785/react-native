import { ADD_PLACE, DELETE_PLACE } from '../actions/actiontypes'

const intialState = {
    places: [],
};

const reducer = (state = intialState, action) => {
    switch (action.type) {

        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.placeName,
                    imagePath: { uri: action.image.uri },
                    location: action.location
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter((place) => place.key !== action.placeKey),
            };
        default:
            return state;
    }
}

export default reducer;