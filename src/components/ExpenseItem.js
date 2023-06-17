// @ts-check

import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

/**
 * 
 * @param {Object} props
 * @param {Date} props.date
 * @param {string} props.title
 * @param {number} props.priceEUR 
 */
function ExpenseItem(props) {
    return (
        <li>
            <div className="expense-item">
                <ExpenseDate date={props.date}></ExpenseDate>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">EUR {props.priceEUR}</div>
                </div>
            </div>
        </li>
    )
}

export default ExpenseItem;