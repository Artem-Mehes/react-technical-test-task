import { createStore } from 'redux';
import rootReducer from './reducers';
import { saveToLocalStorage, loadFromLocalStorage } from './services/storage';

const store = createStore(rootReducer, {
	selected: loadFromLocalStorage('selected'),
});

store.subscribe(() => 
    saveToLocalStorage('selected', store.getState().selected)
);

export default store;
