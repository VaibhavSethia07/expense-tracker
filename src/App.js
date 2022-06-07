import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import data from './data';
import { useState } from 'react';

function App() {
  const [transactions, setTransactions] = useState(data);
  return (
    <div>
      <Header />
      <div className="container">
        <Balance transactions={transactions} />
        <IncomeExpenses transactions={transactions} />
        <TransactionList transactions={transactions} />
        <AddTransaction transactions={transactions} setTransactions={setTransactions} />
      </div>
    </div>
  );
}

export default App;
