const BudgetInitialValues = {}

const budgetReducer = (state=BudgetInitialValues, action) => {
    switch (action.type) {
        case 'SET_BUDGET': {
            return {...state, ...action.payload}
        }
        case 'UPDATE_BUDGET': {
            return {...state, ...action.payload}
        }


        default: {
            return {...state}
        }
    }
}

export default budgetReducer