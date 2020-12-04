import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { saveToLocalStorage, loadFromLocalStorage } from './services/storage';

const store = createStore(
	rootReducer,
	{
		selected: loadFromLocalStorage('selected'),
	},
	applyMiddleware(thunk)
);

store.subscribe(() => 
    saveToLocalStorage('selected', store.getState().selected)
);

export default store;
