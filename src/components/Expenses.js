// @ts-check

import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from "./ExpensesFilter";

/**
 * @param {object} props
 * @param {{title: string, date: Date, priceEUR: number}[]} props.expenses 
 */
function Expenses(props) {
    const [expenses, setExpenses] = useState(props.expenses);

    /**
     * @type { import("./types").OnExpenseFilterChangeHandler }
     */
    function expenseFilterChangeHandler(year) {
        setExpenses(props.expenses.filter(expense => {
            return expense.date.getFullYear() === year;
        }));
    }

    return (
        <div>
            <div className="expenses">
                <ExpensesFilter onFilterChange={expenseFilterChangeHandler} />
                {
                    expenses.length > 0 ?
                        expenses.map(expense => {
                            return <ExpenseItem
                                key={Math.random()}
                                title={expense.title}
                                date={expense.date}
                                priceEUR={expense.priceEUR} />
                        })
                        : <div style={{ color: "white" }}>No Expense found.</div>
                }
            </div>
        </div>
    )
}

export default Expenses;