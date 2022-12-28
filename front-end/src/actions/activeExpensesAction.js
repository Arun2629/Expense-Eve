import axios from 'axios'

export const startGetActiveExpenses = () => {

    return (dispatch) => {

        axios.get('http://localhost:3055/expenses/active', {
            headers: {
                'Authorization': localStorage.getItem('exp-token')
            }
        })
            .then((response) => {
                const expenses = response.data
                dispatch(setActiveExpenses(expenses))
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

const setActiveExpenses = (data) => {
    return {
        type: 'SET_ACTIVE_EXPENSES',
        payload: data
    }
}

export const addActiveExpense = (data) => {
    return {
        type: 'ADD_ACTIVE_EXPENSE',
        payload: data
    }
}

export const removeActiveExpense = (data) => {
    return {
        type: 'REMOVE_ACTIVE_EXPENSE',
        payload: data
    }
}

export const updateActiveExpense = (data) => {
    return {
        type: 'UPDATE_ACTIVE_EXPENSE',
        payload: data
    }
}