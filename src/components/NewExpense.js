// @ts-check

import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";


/**
 * @param {object} props
 * @param {import("./types").OnExpenseDataHandler} props.onNewExpense
 */
function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false);

    /** @type {import("./types").OnExpenseDataHandler} */
    function formSubmitHandler(expense) {
        props.onNewExpense(expense);
    }

    function stopEditingHandler() {
        setIsEditing(false);
    }

    function startEditingHandler() {
        setIsEditing(true);
    }

    return (
        <div className="new-expense">
            {
                isEditing ?
                    <ExpenseForm onSubmit={formSubmitHandler} onCancel={stopEditingHandler}/>
                    : <button onClick={startEditingHandler}>New Expense</button>
            }
        </div>
    )
}

export default NewExpense;