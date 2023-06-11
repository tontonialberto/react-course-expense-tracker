// @ts-check
import React from "react";
import "./Expenses.css";
import ExpenseItem from './ExpenseItem';

/**
 * @param {Object} props
 * @param {{title: string, date: Date, priceEUR: number}[]} props.expenses 
 */
function Expenses(props) {
    return (
        <div className="expenses">
            {
                props.expenses.map(expense => {
                    return <ExpenseItem 
                        key={Math.random()} 
                        title={expense.title} 
                        date={expense.date} 
                        priceEUR={expense.priceEUR}/>
                })
            }
        </div>
    )
}

export default Expenses;