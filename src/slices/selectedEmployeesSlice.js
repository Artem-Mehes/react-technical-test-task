import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const selectedEmployeesSlice = createSlice({
	name: 'selectedEmployees',
	initialState,
	reducers: {
		checkEmployee: (state, { payload }) => {
			const { employee, month } = payload;

			if (state[month] === undefined) {
				state[month] = [];
				state[month].push(employee);
			} else {
				state[month].push(employee);
			}
		},
		uncheckEmployee: (state, { payload }) => {
			const { month, employee } = payload;

			const filtered = state[month].filter(
				({ id }) => id !== employee.id
			);

			if (filtered.length > 0) {
				state[month] = filtered;
			} else {
				delete state[month];
			}
		},
		clearAll: () => initialState,
	},
});

export const selectSelectedEmployees = (state) => state.selected;

export const {
	checkEmployee,
	uncheckEmployee,
	clearAll,
} = selectedEmployeesSlice.actions;
export default selectedEmployeesSlice.reducer;
