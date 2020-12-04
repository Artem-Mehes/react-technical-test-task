import { configureStore } from '@reduxjs/toolkit';
import allEmployeesReducer from './slices/allEmployeesSlice';
import selectedEmployeesReducer from './slices/selectedEmployeesSlice';
import { saveToLocalStorage, loadFromLocalStorage } from './services/storage';

const preloadedState = {
	selectedEmployees: loadFromLocalStorage('selectedEmployees'),
};

const store = configureStore({
	reducer: {
		allEmployees: allEmployeesReducer,
		selectedEmployees: selectedEmployeesReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== 'production',
	preloadedState,
});

store.subscribe(() =>
	saveToLocalStorage('selectedEmployees', store.getState().selectedEmployees)
);

export default store;
