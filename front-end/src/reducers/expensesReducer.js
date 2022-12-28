const expensesInititalValue = []

const expensesReducer = (state=expensesInititalValue, action) => {
    switch(action.type) {
        case 'CREATE_EXPENSE': {
            return [action.payload, ...state]
        }

        case 'SET_EXPENSES': {
            return [...action.payload]
        }

        case 'UPDATE_EXPENSE': {
            return state.map((ele) => {
                if(ele._id === action.payload._id){
                    return {...ele, ...action.payload}
                }else{
                    return {...ele}
                }
            })
        }

        case 'DELETE_EXPENSE': {
            return state.map((ele) => {
                if(ele._id === action.payload._id){
                    return {...ele, ...action.payload}
                }else {
                    return {...ele}
                }
            })
        }

        default: {
            return [...state]
        }
    }
}

export default expensesReducer