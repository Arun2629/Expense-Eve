import React, {useEffect, useState} from 'react'
import { Form, Input } from 'antd'
import {useSelector, useDispatch} from 'react-redux'
import { startGetActiveExpenses } from '../../actions/activeExpensesAction'
import ExpensesDisplay from './ExpensesDisplay'
import FloatButtonComp from './FloatButtonComp'
import AddExpense from './AddExpense'

const ExpensesContainer = (props) => {
    const [search, setSearch] = useState('')
    const activeExpenses = useSelector((state) => {
        return state.activeExpenses
    })
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetActiveExpenses())
    },[dispatch])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const filterExpenses = () => {
        const result = activeExpenses.filter((ele) => {
            return ele.category.title.toLowerCase().includes(search)
        })
        return result
    }


    return (
        <div >
            <AddExpense /><br/>
            
                {
                    activeExpenses.length > 0 &&  <>  <Form.Item
                                                        className='search'
                                                        name="search"
                                                        style={{borderRadius: '50%'}}
                                                >
                                                    <Input.Search
                                                        type="text"
                                                        placeholder="Search by Category"
                                                        value={search}
                                                        onChange={handleChange}
                                                    />
                                                </Form.Item><br/>
                                                <ExpensesDisplay expenses={filterExpenses()}/>
                                                
                                            </>
                }
                <FloatButtonComp/>
           
        </div>
    )
}
export default ExpensesContainer