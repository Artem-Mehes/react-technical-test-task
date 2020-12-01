const setEmployeesReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_EMPLOYEES':
            return action.employees;
        default:
            return state;
    }
}

export default setEmployeesReducer;