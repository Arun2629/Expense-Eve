import React, {useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import {FallOutlined, PlusCircleTwoTone} from '@ant-design/icons'
import { Card, Statistic, Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { startGetBudget } from '../../actions/budgetAction'
import { startGetExpenses } from '../../actions/expensesAction'


const BudgetDisplay = (props) => {
    const dispatch = useDispatch()
    const budget = useSelector((state) => {
        return state.budget
    })
    const expenses = useSelector((state) => {
        return state.expenses
    })

    const expenseAmountArray = expenses.map((expense) => {
        if(!expense.deleted){
            return expense.amount
        }else {
            return 0
        }
    })

    const totalExpense = expenseAmountArray.reduce((prevValue, currValue) => {
        return prevValue + currValue
    }, 0)

    const spentBudget = ((totalExpense/budget.amount) * 100).toFixed(2)
    
    useEffect(() => {
        dispatch(startGetBudget())
        dispatch(startGetExpenses())
    },[dispatch])

    const handleClick = () => {
        props.history.push('/account/settings')

    }
      

    return (
        <div>
             <Card
                className='budget-card'
                hoverable
                title="Budget Overview"
                bordered={true}
                bodyStyle={{backgroundColor: 'ButtonHighlight', backdropFilter: 'revert-layer', height: 250}}
                style={{
                    width: 300,
                    height:300,
                    fontFamily: 'Lato'
                }}
                >
                    <h3>Total Budget - {budget.amount}</h3><br/>
                    <h3>Total Expenses - {totalExpense}</h3><br/>
            
                    {
                        budget.amount > 0 ? (budget.amount < totalExpense ? (<h3>Expense limit Exceeded Budget  
                                                                                        <Button type='primary' 
                                                                                                icon={<PlusCircleTwoTone/>} 
                                                                                                onClick={handleClick}>
                                                                                                    Update Budget
                                                                                        </Button>
                                                                            </h3>)
                                                                        : (<Statistic
                                                                                title="Spent"
                                                                                value={spentBudget}
                                                                                precision={2}
                                                                                valueStyle={{ color: '#cf1322' }}
                                                                                prefix={<FallOutlined />}
                                                                                suffix="%"
                                                                    />)) :   (<Button  type='primary' 
                                                                                    icon={<PlusCircleTwoTone/>} 
                                                                                    onClick={handleClick}>
                                                                                        Update Budget
                                                                            </Button>) 
                    }
                    
                    
                </Card>
        </div>
        
       
   
    )
}

export default withRouter(BudgetDisplay)