import React from 'react'

export const IncomeExpenses = ({ transactions }) => {
    let income = 0, expense = 0;
    transactions.map((transaction) => {
        if (transaction.amount > 0)
            income += transaction.amount;
        else
            expense += transaction.amount;
        return transaction;
    })
    return <div className="inc-exp-container">
        <div className="income-container">
            <h4>income</h4>
            <p className="money plus">+${income.toFixed(2)}</p>
        </div>
        <div className="expense-container">
            <h4>expense</h4>
            <p className="money minus">-${Math.abs(expense).toFixed(2)}</p>
        </div>
    </div>
}