import React from 'react';
import BudgetDisplay from './BudgetDisplay'
import CategoryDisplay from './CategoryDisplay'

const DisplayContainer = (props) => {


    return (
        <div className='display-container'>
                <BudgetDisplay />
                <CategoryDisplay/>
            </div>
    )
}

export default DisplayContainer