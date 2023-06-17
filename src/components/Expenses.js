// @ts-check

import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from "./ExpensesFilter";
import Chart from "./Chart";

/**
 * @param {object} props
 * @param {{title: string, date: Date, priceEUR: number}[]} props.expenses 
 */
function Expenses(props) {
    const [expensesFilter, setExpensesFilter] = useState(2021);

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear() === expensesFilter;
    });

    // Sort expenses by date DESC.
    filteredExpenses.sort((expenseA, expenseB) => {
        return expenseB.date.getTime() - expenseA.date.getTime();
    })

    // Compute chart data.
    /**
     * @type {{name: string, value: number}[]}
     */
    const expensesByMonth = [
        { name: "January", month: 0 },
        { name: "February", month: 1 },
        { name: "March", month: 2 },
        { name: "April", month: 3 },
        { name: "May", month: 4 },
        { name: "June", month: 5 },
        { name: "July", month: 6 },
        { name: "August", month: 7 },
        { name: "September", month: 8 },
        { name: "October", month: 9 },
        { name: "November", month: 10 },
        { name: "December", month: 11 },
    ]
        .map(month => {
            // For every month, the total expense amount.
            const totalMonthAmount = filteredExpenses
                .filter(expense => expense.date.getMonth() === month.month)
                .reduce((total, expense) => {
                    return total + expense.priceEUR
                }, 0);
            return {
                name: month.name,
                value: totalMonthAmount,
            }
        });

    /**
     * @type { import("./types").OnExpenseFilterChangeHandler }
     */
    function expenseFilterChangeHandler(year) {
        setExpensesFilter(year);
    }

    return (
        <div>
            <div className="expenses">
                <ExpensesFilter value={expensesFilter} onFilterChange={expenseFilterChangeHandler} />
                <Chart dataPoints={expensesByMonth} />
                {
                    filteredExpenses.length > 0 ?
                        (
                            <ul className="expenses-list">
                                {
                                    filteredExpenses.map(expense => {
                                        return <ExpenseItem
                                            key={Math.random()}
                                            title={expense.title}
                                            date={expense.date}
                                            priceEUR={expense.priceEUR} />
                                    })
                                }
                            </ul>
                        )
                        : <div className="expenses-list__fallback">No Expense found.</div>
                }
            </div>
        </div>
    )
}

export default Expenses;