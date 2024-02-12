import './App.css'
import Expenseitem from './components/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
import React,{useState , useEffect} from 'react';

let DUMMY_EXPENSE=[
//     {
//         id:"e1",
//         title:"school fee",
//         amount:"240",
//         date : new Date(2021,12,2)
//     },
//     {
//         id:"e2",
//         title:"Books",
//         amount:"240",
//         date : new Date(2023,22,2)
//     },
//     {
//         id:"e3",
//         title:"uniforms",
//         amount:"240",
//         date : new Date(2012,12,8)
//     },
//     {
//         id:"e4",
//         title:"Bags ",
//         amount:"270",
//         date : new Date(2011,12,2)
//     },
]

function App(){
  
  const[expenses,setExpenses]=useState(DUMMY_EXPENSE);
  function FetchData(){
    fetch('http://localhost:5102/api/Expense_Tracker_API').then(
      
    response=>{
      return response.json();
    }
  ).then(
    data=>{
      console.log(data);
      setExpenses(data);
    }
  );

  }
  useEffect(()=> {
  FetchData();

  },[]);
  
  
  
  // let Api_Url1="http://localhost:5102/";
  // fetch('http://localhost:5102/api/Expense_Tracker_API').then(
      
  //     response=>{
  //       return response.json();
  //     }
  //   ).then(
  //     data=>{
  //       console.log(data);
  //       setExpenses(data);
  //     } 
  //   );
    
    
      const addExpensedatahandler=(expense)=>{
      
        fetch('http://localhost:5102/api/Expense_Tracker_API',{
          method:'POST',
          body:JSON.stringify(expense),
          headers:{
            'content-Type':'application/json'
          }
        }).then(
          response =>{
            FetchData();
          }
        );
      };
   

    return (
        <div>
       
            <NewExpense onAddExpense={addExpensedatahandler} />
            
        <div className='expenses1'>
            {
                expenses.map(expense => (
                    <Expenseitem
                      key={expense.Id}
                      
                      date={expense.Date}
                      title={expense.Title}
                      amount={expense.Amount}
                    />
                  )
                  
                )
                
                
            }
              
            
    
            
           

        </div>
      
      </div>
    )

}



export default App;