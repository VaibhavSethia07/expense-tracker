import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import data from './assets/data'

import { useState, useEffect } from 'react';

function App() {
  const [transactions, setTransactions] = useState(data);

  // Since getTransactions is an asynchronous call, we call it inside useEffect()
  useEffect(() => {
    const url = '/api/v1/transactions';
    const getFormattedData = async (url) => {

      try {
        const resp = await fetch(url);
        const jsonData = await resp.json();
        console.log(jsonData);
        const reqdData = await jsonData.data;

        return reqdData;

      } catch (err) {
        console.log(err)
      }

      getFormattedData(url);
    };

  }, [transactions]);

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
