import { useContext, useState } from 'react';
import './App.css';
import Transaction from './Transaction';
import {TransactionContext, TransactionProvider} from './TransContext'

function App() {
  
  const transactions = useContext(TransactionContext)
  let [newdescription, setDesription] = useState("");
  let [newAmount, setAmount] = useState(0);

  

  const handleAddition = (e) => {
    e.preventDefault()
    console.log(newdescription,newAmount);
    TransactionProvider.addTransaction({
      amount:newAmount,
      detail:newdescription
    })
  }

  return (
    <div className="App">
      <div className="App__centered">
      <h1>Expense Tracker</h1>
      <div className="balance__container">
        <h4>YOUR BALANCE</h4>
        <h1>$260.00</h1>
      </div>

      <div className="track">
        <div className="track__income">
          <h3>INCOME</h3>
          <h2 className="income" >$500.00</h2>
        </div>
        <div className="line"></div>
        <div className="track__expense">
        <h3>EXPENSE</h3>
        <h2 className="expense" >$240.00</h2>
        </div>
      </div>

      <h4>History</h4>
      <hr/>
      <div className="history">
        {transactions.map((transObj,ind) => {
          return(
            <Transaction
              detail={transObj.detail}
              amount={transObj.amount}
            />
          )
        })}
      </div>
      <h4>Add New Transaction</h4>
      <form className="transactionForm" onSubmit={handleAddition}>
        <label>
          Enter Describtion <br/>
          <input type="text" onChange={(e)=>setDesription(e.target.value)} required/>
        </label>
        <br/>
        <label>
          Enter Amount <br/>
          <input type="number" onChange={(e)=>setAmount(e.target.value)} required/>
        </label>
        <br/>
        <input className="transactionForm__submistion" type="submit" value="Add Transaction" />
      </form>
      </div>
    </div>
  );
}

export default App;
