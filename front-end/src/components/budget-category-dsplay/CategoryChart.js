import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { startGetCategories } from "../../actions/categoriesAction";
import { startGetExpenses } from "../../actions/expensesAction";
import { Chart } from "react-google-charts";

const CategoryChart = (props) => {
    const categories = useSelector((state) => {
        return state.categories
    })

    const expenses = useSelector((state) => {
        return state.expenses
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetCategories())
        dispatch(startGetExpenses())
    },[dispatch])

    const freqObj = {}
    categories.forEach((category) => {
        freqObj[category.title] = 0
    })

    expenses.forEach((expense) => {
        if(!expense.deleted) {
            freqObj[expense.category.title] = freqObj[expense.category.title] + expense.amount
        }
    })

   
    const data = [
        ["Category", "Expense"],
        
      ];

      for (const key in freqObj){
        data.push([key, freqObj[key]])
    } 
      
    const filterCategories = categories.filter((category) => {
        return !category.deleted
    })

    return (
            <div>
                {
                    filterCategories.length <= 5 ? (<Chart
                                                        chartType="PieChart"
                                                        data={data}
                                                        options={{is3D: true}}
                                                        style={{position: "relative", margin: "auto", width: "100%"}}
                                                        />) 
                                                :   (<Chart
                                                        chartType="Table"
                                                        style={{position: "inherit", width: "100%"}}
                                                        data={data}
                                                        options={{  allowHtml: true,
                                                                    showRowNumber: true,
                                                                }}
                                                                    
                                                        />)
                                }
            </div>
        )
    }

export default CategoryChart
