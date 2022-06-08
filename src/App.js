import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import data from './assets/data';
import { useState } from 'react';

function App() {
  const [transactions, setTransactions] = useState(data);
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
