import React, { useState } from 'react';

export const TransactionList = ({ transactions, setTransactions }) => {
    const removeTransaction = (id) => {
        const newTransactions = transactions.filter(transaction => transaction.id !== id);
        setTransactions(newTransactions);
    }

    const [showButton, setShowButton] = useState(false);

    return <div className="transaction-list-container">
        <h3>History</h3>
        <ul className="list">
            {transactions.map((transaction) => {
                const { id, text, amount } = transaction;
                if (transaction.amount < 0) {
                    return <div className="item-container" key={id} onMouseEnter={() => { setShowButton(true) }} onMouseLeave={() => { setShowButton(false) }}>{(showButton ? <button className='delete-btn' onClick={() => removeTransaction(id)}>x</button> : <></>)}<li className="list-item minus-item" ><div>{text}</div> <span>-${Math.abs(amount)}</span></li></div>
                } else {
                    return <div className="item-container" key={id} onMouseEnter={() => { setShowButton(true) }} onMouseLeave={() => { setShowButton(false) }}>{(showButton ? <button className='delete-btn' onClick={() => removeTransaction(id)}>x</button> : <></>)}<li className="list-item plus-item" ><div>{text}</div> <span>${amount}</span></li></div>
                }
            })}
        </ul >
    </div >
}