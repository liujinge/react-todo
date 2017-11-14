import { createStore, combineReducers } from 'redux';
import toDoApp from './toDoApp';

const reducer = combineReducers({
	toDoApp
});

function configureStore(initialState) {
	const store = createStore(reducer, initialState);

	return store;
}

export default configureStore;