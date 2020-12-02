const selectEmployeeReducer = (state = {}, action) => {
	switch (action.type) {
		case 'CHECK_EMPLOYEE': {
			const { month, employee } = action.payload;
			const stateMonth = state[month];

			return stateMonth !== undefined
				? { ...state, [month]: [...stateMonth, employee] }
				: { ...state, [month]: [employee] };
		}
		case 'UNCHECK_EMPLOYEE': {
			const { month, employee } = action.payload;
			const filtered = state[month].filter(
				({ id }) => id !== employee.id
			);

			if (filtered.length > 0) {
				return {
					...state,
					[month]: filtered,
				};
			} else {
				const { [month]: value, ...withoutEmptyMonth } = state;

				return withoutEmptyMonth;
			}
		}
		default:
			return state;
	}
};

export default selectEmployeeReducer;
