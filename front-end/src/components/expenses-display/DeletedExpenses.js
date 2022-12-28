import React from 'react'
import { Table, Button } from 'antd'
import {UndoOutlined} from '@ant-design/icons'
import {  useDispatch } from 'react-redux'
import { startDeleteExpense } from '../../actions/expensesAction'

const DeletedExpenses = (props) => {
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
                
            })
        
        }
    
    const handleClick = (e, id) => {
      const task = e.target.parentElement.name
      dispatch(startDeleteExpense(id, task))
    }

          const columns = [ 
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
                title: 'operation',
                dataIndex: 'operation',
                render: (_, record) =>
                  originData.length >= 1 ? (
                        <Button type='primary'  
                                style={{backgroundColor: 'green' }} 
                                name='undo' htmlType='button' 
                                icon={<UndoOutlined/>} 
                                onClick={(e) => {handleClick(e,record.key)}}>Undo
                        </Button>
                  ) : null,
              },
           
          ];
          const mergedColumns = columns.map((col) => {
              return col;
          })
          

    return (
        <div>
                 
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

export default DeletedExpenses