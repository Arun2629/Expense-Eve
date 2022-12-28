const deletedExpensesInitialValue = []

const deletedExpensesReducer = (state=deletedExpensesInitialValue, action) => {

    switch(action.type) {
        case 'SET_DELETED_EXPENSES': {
            return [...action.payload]
        }
        case 'ADD_DELETED_EXPENSE': {
            return [action.payload, ...state ]
        }
        case 'REMOVE_DELETED_EXPENSE': {
            return state.filter((expense) => {
                return expense._id !== action.payload._id
            })
        }
        default: {
            return [...state]
        }
    }
}

export default deletedExpensesReducer