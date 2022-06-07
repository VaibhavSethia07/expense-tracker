import React from 'react';

export const TransactionList = ({ transactions }) => {
    return <div className="transaction-list-container">
        <h3>History</h3>
        <ul className="list">
            {transactions.map((transaction) => {
                const { id, text, amount } = transaction;
                if (transaction.amount < 0) {
                    return <li className="minus" key={id}>{text} <span>-${Math.abs(amount)}</span><button className='delete-btn'>x</button></li>
                } else {
                    return <li className='plus' key={id}>{text} <span>${amount}</span><button className='delete-btn'>x</button></li>
                }
            })}
        </ul>
    </div>
}