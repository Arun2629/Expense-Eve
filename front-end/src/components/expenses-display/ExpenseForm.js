import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startGetCategories } from '../../actions/categoriesAction'

import {
    Button,
    Form,
    Input,
    Select,
    DatePicker
  } from 'antd';


const ExpenseForm = (props) => {
  const {formSubmit, data} = props
    const [form] = Form.useForm();
    const categories = useSelector((state) => {
        return state.categories
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetCategories())
    }, [dispatch])

    const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const onFinish = (values) => {
    const formData = {
        itemName: values.itemName,
        amount: values.amount,
        expenseDate: values.expenseDate,
        category: values.category
    }
    const resetFields = () => {
      form.resetFields()
    }

    formSubmit(formData, resetFields)
  };

    return (
        <div>
              <Form
                  {...formItemLayout}
                  form={form}
                  name="register"
                  onFinish={onFinish}
                  initialValues={{itemName: data ? data.itemName: '', category:  '', expenseDate: '', amount: data ? data.amount : ''}}
                  scrollToFirstError
                 
                >
                  <Form.Item
                    name="itemName"
                    label="Item Name"
                    rules={[
                      {
                        required: true,
                        message: 'Item Name is a required field!',
                      }
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  
                  <Form.Item
                    name="expenseDate"
                    label="Expense Date"
                    tooltip="when are you planning to spend it!"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Expense Date!',
                      },
                    ]}
                  >
                    <DatePicker/>
                  </Form.Item>


                  <Form.Item
                    name="amount"
                    label="Amount"
                    rules={[
                      {
                        required: true,
                        message: 'Please input donation amount!',
                      }
                    ]}
                  >
                    <Input
                      style={{
                        width: '100%',
                      }}
                    />
                  </Form.Item>

                  <Form.Item
                    name="category"
                    label="Category"
                    rules={[
                      {
                        required: true,
                        message: 'Please select category!',
                      },
                    ]}
                  >
                    <Select placeholder="select your category">
                    <Option value=''>Select</Option>
                                    {categories.map((category) => {
                                            if(!category.deleted){
                                                return <Option key={category._id} value={category._id}>{category.title}</Option>
                                            }else{
                                              return null
                                            }
                                        
                                        
                                    })}
                    </Select>
                  </Form.Item>

                  <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
          </Form>
      </div>
    )
}

export default ExpenseForm