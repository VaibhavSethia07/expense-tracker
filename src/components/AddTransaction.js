import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const AddTransaction = ({ transactions, setTransactions }) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();

        const newTransaction = { id: uuidv4(), text, amount };

        setTransactions([...transactions, newTransaction]);

        console.log(transactions);
        setText('');
        setAmount(0);
    }
    console.log(transactions);
    return <div className="add-transaction-container">
        <h3>Add new transaction</h3>
        <form>
            <div className="form-control" onSubmit={handleSubmit}>
                <label htmlFor="text">Text</label>
                <input type="text" id="text" name="text" value={text} onChange={(e) => {
                    setText(e.target.value);
                }} placeholder='Enter text...' />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount<br />(negative-expense, positive-income)</label>
                <input type="number" id="amount" name="amount" value={amount} onChange={(e) => {
                    setAmount(e.target.value);
                }} placeholder='Enter amount...' />
            </div>
            <button type="submit">Add Transaction</button>
        </form >
    </div >
}