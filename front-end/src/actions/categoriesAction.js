import axios from 'axios'

export const startGetCategories = () => {

    return (dispatch) => {
        axios.get('http://localhost:3055/categories', {
            headers: {
                'Authorization': localStorage.getItem('exp-token')
            }
        })
        .then((response) => {
            const categories = response.data
            dispatch(setCategories(categories))
            
        })
    }
}

export const startPostCategory = (body, categoryReset) => {

    return (dispatch) => {
        axios.post('http://localhost:3055/categories', body, {
            headers: {
                'Authorization': localStorage.getItem('exp-token')
            }
        })
            .then((response) => {
                const category = response.data
                dispatch(createCategory(category))
                categoryReset()
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export const startDeleteCategory = (id, task) => {

    return (dispatch) => {
        axios.delete(`http://localhost:3055/categories/${id}`, {
        headers: {
            'Authorization': localStorage.getItem('exp-token')
        },
        params: {
                    'task': task
                }
            })
            .then((response) => {
                const category = response.data
                console.log(category)
                dispatch(deletecategory(category))
            })
            .catch((err) => {
                alert(err.message)
            })
            }
    
}

const setCategories = (data) => {
    return {
        type: 'SET_CATEGORIES',
        payload: data
    }
}

const createCategory = (data) => {
    return {
        type: 'CREATE_CATEGORY',
        payload: data
    }
}

const deletecategory = (data) => {
    return {
        type: 'DELETE_CATEGORY',
        payload: data
    }
}