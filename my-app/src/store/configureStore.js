import { createStore,combineReducers} from 'redux';
import placesReducer from './reducers/place-reducer';

const rootReducer = combineReducers({
    placesData: placesReducer
})

const configureStore = ()  => {
    return createStore(rootReducer);
}

export default configureStore;