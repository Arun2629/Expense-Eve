import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {TagTwoTone} from '@ant-design/icons'
import { startDeleteCategory, startGetCategories } from '../../actions/categoriesAction'
import {  Button, List,  Avatar } from 'antd';


const CategoriesList = (props) => {
  const categories = useSelector((state) => {
    return state.categories
})

const dispatch = useDispatch()

useEffect(() => {
    dispatch(startGetCategories())
   
},[dispatch])

const handleClick = (e,id) => {
    const task = e.target.parentElement.name
    dispatch(startDeleteCategory(id, task))
}

  
  return (
    <div className='category-list'>
         <List
            className="demo-loadmore-list"
            itemLayout="horizontal"
            dataSource={categories}
            pagination= {{
              pageSize: 6
            }}
            renderItem={(item) => (
              <List.Item
                style={{backgroundColor: item.deleted ? 'GrayText' : 'darkcyan', 
                        margin: '10px', width: '100vh', 
                        border: '10px', 
                        borderRadius: '10px'}}
                actions={ [item.deleted ? (<Button key="list-loadmore-edit" 
                                                  name='undo' 
                                                  onClick={(e) => {handleClick(e,item._id)}}>Undo
                                          </Button>) : 
                                          (<Button key="list-loadmore-edit" 
                                                  name='delete' 
                                                  onClick={(e) => {handleClick(e,item._id)}}>Delete
                                          </Button>) ]}
              >
               <List.Item.Meta
                    avatar={<Avatar src={<TagTwoTone/>} />}
                    title={item.title}
                  />
        </List.Item>
      )}
    />
    </div>
   
  );
};
export default CategoriesList;