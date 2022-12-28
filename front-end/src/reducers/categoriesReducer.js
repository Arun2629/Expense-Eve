const categoriesInitialValue = []

const categoriesReducer = (state=categoriesInitialValue, action) => {
    switch(action.type) {

        case 'SET_CATEGORIES' : {
            return action.payload
        }

        case 'CREATE_CATEGORY' : {
            return [action.payload, ...state]
        }            

        case 'DELETE_CATEGORY' : {
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

export default categoriesReducer