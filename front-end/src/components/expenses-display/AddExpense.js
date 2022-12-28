import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'antd';
import {PlusCircleOutlined} from '@ant-design/icons'
import { startPostExpense } from '../../actions/expensesAction'
import ExpenseForm from './ExpenseForm';

const AddExpense = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch()
  const showModal = () => {
    setIsModalOpen(true);
  };
 
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const formSubmit = (formData, resetFields) => {
    dispatch(startPostExpense(formData, resetFields, handleCancel))

  }

  return (
    <div className='add-expense'>
          <Button type="primary" 
                  onClick={showModal} 
                  icon={<PlusCircleOutlined/>}
                  >Add Expense
          </Button><br/>
          <Modal  title="Add Expense" 
                  footer={null} 
                  open={isModalOpen}  
                  onCancel={handleCancel}>
              <ExpenseForm 
                  formSubmit={formSubmit}
                />
          </Modal>
    </div>
  );
};
export default AddExpense;