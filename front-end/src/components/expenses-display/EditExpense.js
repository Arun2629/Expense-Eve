import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'antd';
import {EditTwoTone} from '@ant-design/icons'
import { startUpdateExpense } from '../../actions/expensesAction';
import ExpenseForm from './ExpenseForm';

const EditExpense = (props) => {
const {data} = props
const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
 
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const formSubmit = (formData, resetFields) => {
    dispatch(startUpdateExpense(data.key, formData, resetFields, handleCancel))
  };
  return (
    <>
      <Button type="ghost" 
              onClick={showModal} 
              icon={<EditTwoTone/>} 
              size='large'>
      </Button><br/>
      <Modal  title="Edit Expense" 
              footer={null} 
              open={isModalOpen} 
              onCancel={handleCancel}>
          <ExpenseForm formSubmit={formSubmit} data={data}/>
      </Modal>
    </>
  );
};
export default EditExpense;