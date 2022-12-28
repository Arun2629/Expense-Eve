import React, { useState, useEffect} from 'react';
import DeletedExpenses from './DeletedExpenses';
import { useSelector, useDispatch } from 'react-redux'
import { startGetDeletedExpenses } from '../../actions/deletedExpensesAction'
import { FloatButton, Drawer } from 'antd';
import {DeleteFilled} from '@ant-design/icons'

const FloatButtonComp = (props) => {
  const [open, setOpen] = useState(false);
  const deletedExpenses = useSelector((state) => {
    return state.deletedExpenses
})
const dispatch = useDispatch()

useEffect(() => {
    dispatch(startGetDeletedExpenses())
},[dispatch])

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <FloatButton  type="primary" 
                    icon={<DeleteFilled/>} 
                    onClick={showDrawer}
                    tooltip={<div>Deleted Expenses</div>}
      />
      <Drawer   title="Deleted Expenses" 
                placement="right" 
                onClose={onClose} 
                open={open}  
                width={600}  >
        <DeletedExpenses expenses={deletedExpenses}/>
      </Drawer>
    </>
  );
};
export default FloatButtonComp;