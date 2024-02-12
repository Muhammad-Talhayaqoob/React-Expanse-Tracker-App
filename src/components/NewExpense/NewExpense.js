import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";


const NewExpense=(props)=>{
    const saveExpensedataHandler=(enteredExpensedata)=>{

        const Expensedata={
            ...enteredExpensedata,
            // id:Math.random().toString()
        }

        props.onAddExpense(Expensedata);
        console.log(Expensedata);
    };
    return(
        <div className="new-expense">

            <ExpenseForm onsaveExpenseData={saveExpensedataHandler}/>
            
        </div>
    );
}

export default NewExpense;