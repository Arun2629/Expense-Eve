import React from 'react'
import DisplayContainer from '../budget-category-dsplay/DisplayContainer'
import ExpensesContainer from '../expenses-display/ExpensesContainer'

const Dashboard = (props) => {
 
    return (
        <div className='dashboard-container'>
            <DisplayContainer/>
            <ExpensesContainer/>
        </div>
    )
}

export default Dashboard