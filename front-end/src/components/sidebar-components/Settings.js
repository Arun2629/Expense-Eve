import React, {useState, useEffect} from 'react'
import {Input, Button, Form} from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { startPutBudget, startGetBudget } from '../../actions/budgetAction'
import { startPostCategory } from '../../actions/categoriesAction'
import CategoriesList from '../budget-category-dsplay/CategoriesList'


const Settings = (props) => {
    const budget = useSelector((state) => {
        return state.budget
    })
    const [amount, setAmount] = useState('')
    const [title, setTitle] = useState('')
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetBudget())
    },[dispatch])
      

    const handleChange = (e) => {
        if(e.target.name === 'update-budget'){
            setAmount(e.target.value)
        }else if (e.target.name === 'add-category'){
            setTitle(e.target.value)
        }
    }
    const handleClick = (e, id) => {
    
        if(e.target.parentElement.name === 'update-budget'){
            const body = {
                amount
            }
            dispatch(startPutBudget(id, body))
        }else if (e.target.parentElement.name === 'add-category'){
            const body = {
                title
            }
            const categoryReset = () => {
                setTitle('')
            }
            dispatch(startPostCategory(body, categoryReset))
        }
    }

    return (
        <div className='settings-container'>

            <Form.Item
            label="Update Budget"
            style={{margin: '10px', width:'50%', borderColor:'ActiveBorder'}}>
            <Input  className='settings-item1'
                        type='text' 
                        valid 
                        value={amount} 
                        onChange={handleChange} 
                        name='update-budget' 
                        placeholder={budget.amount}
                        style={{width: '80%'}}
                        />
                <Button onClick={(e) => {handleClick(e, budget._id)}} name='update-budget' style={{backgroundColor:'burlywood'}}>
                     Update
                </Button>
            </Form.Item>

               
            <Form.Item
            label="Add Your Category"
            style={{margin: '10px', width:'50%', borderColor:'ActiveBorder'}}>
            <Input  type='text' 
                        valid 
                        value={title} 
                        onChange={handleChange} 
                        name='add-category' 
                        placeholder='Add your Category'
                        style={{width: '80%'}}
                        />
                <Button onClick={handleClick} name='add-category' style={{backgroundColor:'burlywood'}}>
                     Add
                </Button>
            
            </Form.Item>
               

            <CategoriesList />
        </div>
    )
}

export default Settings