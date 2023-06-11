// @ts-check
import React from 'react';
import './ExpenseDate.css';

/**
 * @param {Object} props 
 * @param {Date} props.date
 */
function ExpenseDate(props) {
    const day = props.date.toLocaleString("it-IT", { day: "2-digit" });
    const month = props.date.toLocaleString("it-IT", { month: "long" });
    const year = props.date.toLocaleString("it-IT", { year: "numeric" })

    return (
        <div className="expense-date">
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    )
}

export default ExpenseDate;