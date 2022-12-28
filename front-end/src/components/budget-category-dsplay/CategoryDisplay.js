import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startGetCategories } from '../../actions/categoriesAction'
import { Button, Card } from 'antd'
import { withRouter } from 'react-router-dom'
import CategoryChart from './CategoryChart'


const CategoryDisplay = (props) => {
    const categories = useSelector((state) => {
        return state.categories
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetCategories())
    },[dispatch])

    const handleClick = () => {
        props.history.push('/account/settings')
    }

   
    return(
        <div>
            <Card
                hoverable
                title="Category Wise Split"
                bordered={true}
                bodyStyle={{backgroundColor: 'ButtonHighlight', backdropFilter: 'revert-layer'}}
                style={{
                    width: 300,
                    fontFamily: 'Lato'
          }}
        >
         {
               categories.length > 0 ? (<CategoryChart/>) : (<Button type='primary' onClick={handleClick}>Add Category</Button>)
            }
            
            
        </Card>
           
        </div>
            
      
    )
}

export default withRouter(CategoryDisplay)