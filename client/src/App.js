import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { getTransactions } from './api/transactions';
import data from './assets/data'
import { useState, useEffect } from 'react';

function App() {
  const [transactions, setTransactions] = useState(data);
  // console.log(getTransactions());
  // Since getTransactions is an asynchronous call, we call it inside useEffect()

  useEffect(() => {
    setTransactions(getTransactions());
  }, [])

  // console.log(transactions());
  return (

    <div className="container">
      <Header />
      <Balance transactions={transactions} />
      <IncomeExpenses transactions={transactions} />
      <AddTransaction transactions={transactions} setTransactions={setTransactions} />
      <TransactionList transactions={transactions} setTransactions={setTransactions} />
    </div>
  );
}

export default App;
