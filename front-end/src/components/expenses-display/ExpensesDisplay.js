//Expenses Display
import React from 'react'
import {Table, Button} from 'antd'
import {DeleteOutlined} from '@ant-design/icons'
import {  useDispatch } from 'react-redux'
import {  startDeleteExpense} from '../../actions/expensesAction'
import EditExpense from './EditExpense'


const ExpensesDisplay = (props) => {
 
   const {expenses} = props
    const dispatch = useDispatch()
    const originData = [];
        for (let i = 0; i < expenses.length; i++) {
           
                originData.push({
                    key: expenses[i]._id,
                    category: expenses[i].category.title,
                    itemName: expenses[i].itemName,
                    amount: expenses[i].amount,
                    expenseDate: new Date(expenses[i].expenseDate).toDateString()
                });
            
        
        }
          
        const handleClick = (e, id) => {
            const task = e.target.parentElement.name
             console.log(e.target.parentElement.name)
              dispatch(startDeleteExpense(id, task))
                
        }
        
          const columns = [ 
            { 
                title: 'Edit',
                dataIndex: 'operation',
                render: (_, record) => {
                  return (
                    <EditExpense data={record}/>
                  )
                },
              },
            {
              title: 'Category',
              dataIndex: 'category',
              width: '25%',
            },
            {
              title: 'Item Name',
              dataIndex: 'itemName',
              width: '25%',
            },
            {
              title: 'Amount',
              dataIndex: 'amount',
              width: '25%',
            },
            {
                title: 'Expense Date',
                dataIndex: 'expenseDate',
                width: '25%',
              },
              {
                title: 'Delete',
                dataIndex: 'operation',
                render: (_, record) =>
                  originData.length >= 1 ? (
                        <Button type='primary' name='delete' htmlType='button' icon={<DeleteOutlined/>} danger onClick={(e) => {handleClick(e,record.key)}}>Delete</Button>
                  ) : null,
              },
           
          ];
          const mergedColumns = columns.map((col) => {
              return col;
          })
            
    

    return (
        <div className='table-container'>
             
      <Table
        bordered
        dataSource={originData}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination
      />
   
  
        </div>
    )
}


export default ExpensesDisplay