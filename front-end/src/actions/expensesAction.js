import axios from 'axios'
import { addActiveExpense, removeActiveExpense, updateActiveExpense } from './activeExpensesAction'
import { addDeletedExpense, removeDeletedExpense } from './deletedExpensesAction'

export const startGetExpenses = () => {

    return (dispatch) => {
        axios.get('http://localhost:3055/expenses', {
            headers: {
                'Authorization': localStorage.getItem('exp-token')
            }
        })
        .then((response) => {
            const expenses = response.data
            dispatch(setExpenses(expenses))
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const startPostExpense = (formData, resetFields, handleCancel) => {

    return (dispatch) => {
        axios.post('http://localhost:3055/expenses', formData, {
            headers: {
                'Authorization': localStorage.getItem('exp-token')
            }
        })
            .then((response) => {
                const expense = response.data
                dispatch(createExpense(expense))
                dispatch(addActiveExpense(expense))
                resetFields()
                handleCancel()
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export const startUpdateExpense = (id, formData, resetFields, handleCancel) => {

    return (dispatch) => {
        axios.put( `http://localhost:3055/expenses/${id}`, formData, {
            headers: {
                'Authorization': localStorage.getItem('exp-token')
            }
        })
        .then((response) => {
            const expense = response.data
            dispatch(updateExpense(expense))
            dispatch(updateActiveExpense(expense))
            resetFields()
            handleCancel()

        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const startDeleteExpense = (id, task) => {

    return (dispatch) => {
        axios.delete(`http://localhost:3055/expenses/${id}`, {
            headers: {
                'Authorization': localStorage.getItem('exp-token')
            },
            params: {
                'task': task
            }
        })
        .then((response) => {
            const expense = response.data
            dispatch(deleteExpense(expense))
            if(expense.deleted === true){
                dispatch(removeActiveExpense(expense))
                dispatch(addDeletedExpense(expense))
            }else if(expense.deleted === false){
                dispatch(removeDeletedExpense(expense))
                dispatch(addActiveExpense(expense))
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

const createExpense = (data) => {
    return {
        type: 'CREATE_EXPENSE',
        payload: data
    }
}

export const setExpenses = (data) => {
    return {
        type: 'SET_EXPENSES',
        payload: data
    }
}

const updateExpense = (data) => {
    return {
        type: 'UPDATE_EXPENSE',
        payload: data
    }
}

const deleteExpense = (data) => {
    return {
        type: 'DELETE_EXPENSE',
        payload: data
    }
}