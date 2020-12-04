import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import alphabetSort from 'services/alphabetSort';

const API_URL =
	'https://yalantis-react-school-api.yalantis.com/api/task0/users';

export const getEmployees = createAsyncThunk(
	'employees/loadEmployees',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get(API_URL);

			return alphabetSort(response.data);
		} catch (err) {
			return rejectWithValue(err.message);
		}
	}
);

const employeesSlice = createSlice({
	name: 'employees',
	initialState: { entities: {}, loading: 'idle', error: null },
	reducers: {},
	extraReducers: {
		[getEmployees.pending]: (state) => {
			if (state.loading === 'idle') {
				state.loading = 'pending';
			}
		},
		[getEmployees.fulfilled]: (state, { payload }) => {
			if (state.loading === 'pending') {
				state.entities = payload;
				state.loading = 'loaded';
			}
		},
		[getEmployees.rejected]: (state, { payload }) => {
			if (state.loading === 'pending') {
				state.error = payload;
				state.loading = 'error';
			}
		},
	},
});

export const selectStatus = (state) => state.employees.loading;
export const selectError = (state) => state.employees.error;
export const selectEmployees = (state) => state.employees.entities;

export default employeesSlice.reducer;
