import axios from 'axios'
import swal from 'sweetalert'

export const startGetBudget = () => {
    
    return (dispatch) => {
        axios.get('http://localhost:3055/budgets', {
        headers: {
            'Authorization': localStorage.getItem('exp-token')
        }
            })
            .then((response) => {
                const budget = response.data
                dispatch(setBudget(budget[0]))
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export const startPutBudget = (id, body) => {

    return (dispatch) => {
        axios.put(`http://localhost:3055/budgets/${id}`, body, {
            headers: {
                'Authorization': localStorage.getItem('exp-token')
            }
        })
        .then((response) => {
            const budget = response.data
            swal('budget updated successfully')
            dispatch(updateBudget(budget))
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}


const setBudget = (data) => {
    return {
        type: "SET_BUDGET",
        payload: data
    }
}

const updateBudget = (data) => {
    return {
        type: 'UPDATE_BUDGET',
        payload: data
    }
}