import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const AddTransaction = ({ transactions, setTransactions }) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        const newTransaction = { id: uuidv4(), text, amount: Number(amount) };
        setTransactions([...transactions, newTransaction]);

        setText('');
        setAmount(0);
    }

    return <div className="add-transaction-container">
        <h3>Add new transaction</h3>
        <form onSubmit={handleSubmit}>
            <div className="form-control" >
                <label htmlFor="text">Text</label>
                <br />
                <input type="text" id="text" name="text" value={text} onChange={(e) => {
                    setText(e.target.value);
                }} placeholder='Enter text...' required />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount<br />(negative-expense, positive-income)</label>
                <br />
                <input type="text" id="amount" name="amount" value={amount} onChange={(e) => {
                    setAmount(e.target.value);
                }} placeholder='Enter amount...' required />
            </div>
            <button type="submit">Add Transaction</button>
        </form >
    </div >
}