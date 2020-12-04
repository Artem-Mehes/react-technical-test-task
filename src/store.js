import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './slices/employeesSlice';
import selectedEmployeesReducer from './slices/selectedEmployeesSlice';
import { saveToLocalStorage, loadFromLocalStorage } from './services/storage';

const preloadedState = {
	selected: loadFromLocalStorage('selected'),
};

const store = configureStore({
	reducer: {
		employees: employeesReducer,
		selected: selectedEmployeesReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== 'production',
	preloadedState,
});

store.subscribe(() =>
	saveToLocalStorage('selected', store.getState().selected)
);

export default store;
