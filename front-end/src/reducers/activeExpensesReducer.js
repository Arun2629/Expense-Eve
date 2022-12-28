const activeExpensesInitialValue = []

const activeExpensesReducer = (state=activeExpensesInitialValue, action) => {

    switch(action.type) {
        case 'SET_ACTIVE_EXPENSES': {
            return [...action.payload]
        }
        case 'ADD_ACTIVE_EXPENSE': {
            return [action.payload, ...state ]
        }
        case 'REMOVE_ACTIVE_EXPENSE': {
            return state.filter((expense) => {
                return expense._id !== action.payload._id
            })
        }
        case 'UPDATE_ACTIVE_EXPENSE': {
            return state.map((ele) => {
                if(ele._id === action.payload._id){
                    return {...ele, ...action.payload}
                }else{
                    return {...ele}
                }
            })
        }
        default: {
            return [...state]
        }
    }
}

export default activeExpensesReducer