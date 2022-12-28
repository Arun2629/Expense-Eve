import React from "react";
import { Carousel } from 'antd';

const Account = (props) => {
    
    const contentStyle = {
    height: '350px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    
  
    };

    return (
        <div className="account-container" >
            <div className="account-item1">
            <Carousel autoplay autoplaySpeed={3000}>
                <div>
                <h3 style={contentStyle}>EXPENSE-EVE</h3>
                </div>
                <div>
                <h3 style={contentStyle}>TRACK & SAVE</h3>
                </div>
                <div>
                <h3 style={contentStyle}>YOUR PERSONAL EXPENSE TRACKER</h3>
                </div>
                <div>
                <h3 style={contentStyle}>NAVIGATE TO DASHBOARD FOR DETAILS</h3>
                </div>
            </Carousel>

            </div>
             
            <div className="account-item2">
                <p>Expense-Eve is a personal budget and expense tracking app designed to keep track of your expenses and provide
                  a detailed data about your expenses so that you can save more and grow more. 
                </p>

                <ul>
                    <li>When you track your expenses, you take control of your finances</li>
                    <li>It empowers you to control spending impulses and eliminate frivolous spending, thereby avoiding debt</li>
                    <li>You can, instead, work to create financial security for yourself by spending your money more wisely</li>
                </ul>
            </div>
        </div>
          
           
        
    )
}

export default Account