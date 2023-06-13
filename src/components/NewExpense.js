// @ts-check

import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";


/**
 * @param {object} props
 * @param {import("./types").OnExpenseDataHandler} props.onNewExpense
 */
function NewExpense(props) {

    /** @type {import("./types").OnExpenseDataHandler} */
    function formSubmitHandler(expense) {
        props.onNewExpense(expense);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSubmit={formSubmitHandler}/>
        </div>
    )
}

export default NewExpense;