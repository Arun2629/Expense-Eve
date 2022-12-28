import {createStore, combineReducers, applyMiddleware} from 'redux'
import budgetReducer from '../reducers/budgetReducer'
import categoriesReducer from '../reducers/categoriesReducer'
import expensesReducer from '../reducers/expensesReducer'
import userReducer from '../reducers/userReducer'
import deletedExpensesReducer from '../reducers/deletedExpensesReducer'
import activeExpensesReducer from '../reducers/activeExpensesReducer'
import thunk from 'redux-thunk'


const configureStore = () => {
    const store = createStore(combineReducers({
        budget: budgetReducer,
        categories: categoriesReducer,
        expenses: expensesReducer,
        user: userReducer,
        deletedExpenses: deletedExpensesReducer,
        activeExpenses: activeExpensesReducer

    }), applyMiddleware(thunk))

    return store
}

export default configureStore