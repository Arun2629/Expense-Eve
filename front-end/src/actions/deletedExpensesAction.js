import axios from 'axios'

export const startGetDeletedExpenses = () => {

    return (dispatch) => {
        axios.get('http://localhost:3055/expenses/deleted', {
            headers: {
                'Authorization': localStorage.getItem('exp-token')
            }
        })
            .then((response) => {
                const expenses = response.data
                dispatch(setDeletedExpenses(expenses))
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

const setDeletedExpenses = (data) => {
    return {
        type: 'SET_DELETED_EXPENSES',
        payload: data
    }
}

export const addDeletedExpense = (data) => {
    return {
        type: 'ADD_DELETED_EXPENSE',
        payload: data
    }
}

export const removeDeletedExpense = (data) => {
    return {
        type: 'REMOVE_DELETED_EXPENSE',
        payload: data
    }
}