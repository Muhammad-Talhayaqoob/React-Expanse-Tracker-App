import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
function Expenseitem(props){
       const HandleDel = (key)=>{
        alert(key);
       }
    
     return(
        <div className='expense-item'>
            <div>
              <ExpenseDate date={ new Date(props.date)}/>
            </div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'> $ {props.amount}</div>
                <button onClick={()=>HandleDel(props.key)}>Delete</button>
                
            </div>
            
            
         
        </div>
    );
}
export default Expenseitem;