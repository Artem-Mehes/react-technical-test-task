export const saveToLocalStorage = (key, state) => {
	const persistedState = JSON.stringify(state);
	localStorage.setItem(key, persistedState);
};

export const loadFromLocalStorage = (key) => {
	const persistedState = localStorage.getItem(key);

	return persistedState === null ? undefined : JSON.parse(persistedState);
};
