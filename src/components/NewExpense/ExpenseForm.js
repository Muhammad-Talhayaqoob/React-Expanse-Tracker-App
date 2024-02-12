import React,{useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm=(props)=>{

    const [enteredTitle,setenteredTitle]=useState("")
    const [enteredAmount,setenteredAmount]=useState("")
    const [enteredDate,setenteredDate]=useState("")

    const ChangetitleHandler=(event)=>{
        setenteredTitle(event.target.value);
        
    }
    const ChangeamountHandler=(event)=>{
        setenteredAmount(event.target.value);
        
    }
    const ChangedateHandler=(event)=>{
        setenteredDate(event.target.value);
        
    }
    const submitHandler =(event)=>{
        event.preventDefault();

        const expensedata={
            title:enteredTitle,
            amount:enteredAmount,
            date: new Date(enteredDate),
        }
        console.log(expensedata);

        props.onsaveExpenseData(expensedata);

        
        setenteredTitle("");
        setenteredAmount("");
        setenteredDate("");


    }
 
 
    return ( 
        <form onSubmit={submitHandler}>
    <div>

   <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={ChangetitleHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number"  value={enteredAmount} onChange={ChangeamountHandler}  />
                </div>
                <div className="new-expense__control">
                    <label>Date</label> 
                    <input type="date" value={enteredDate} onChange={ChangedateHandler}  />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>

 </div>
 </form>
 
 );
}

export default ExpenseForm