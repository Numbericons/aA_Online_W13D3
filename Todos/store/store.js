import { createStore } from 'redux';
import rootReducer from '../frontend/reducers/root_reducer';

const configureStore = createStore(rootReducer);

export default configureStore;