import { createSlice } from '@reduxjs/toolkit';

const selectedEmployeesSlice = createSlice({
	name: 'selectedEmployees',
	initialState: {},
	reducers: {
		addEmployee: (state, { payload }) => {
			const { employee, month } = payload;

			if (state[month] === undefined) {
				state[month] = [];
				state[month].push(employee);
			} else {
				state[month].push(employee);
			}
		},
		removeEmployee: (state, { payload }) => {
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
		removeAllEmployees: () => ({}),
	},
});

export const selectSelectedEmployees = (state) => state.selectedEmployees;

export const {
	addEmployee,
	removeEmployee,
	removeAllEmployees,
} = selectedEmployeesSlice.actions;
export default selectedEmployeesSlice.reducer;
