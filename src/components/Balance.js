import React from 'react';

export const Balance = ({ transactions }) => {
    let balance = 0.00;
    transactions.map((transaction) => {
        balance += transaction.amount;
        return transaction;
    })
    console.log(transactions);
    return <div className="balance-container">
        <h4>Your Balance</h4>
        <h1 id="balance">${balance.toFixed(2)}</h1>
    </div>
}