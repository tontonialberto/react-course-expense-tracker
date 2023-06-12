// @ts-check

import React, { useState } from "react";
import "./ExpenseForm.css";


function ExpenseForm() {
    const [title, setTitle] = useState("");

    const [amount, setAmount] = useState(0);

    const [date, setDate] = useState("");

    /**
     * 
     * @param {import("react").FormEvent<HTMLFormElement>} event 
     * @returns {void}
     */
    function formSubmitHandler(event) {
        event.preventDefault();

        setTitle("");
        setAmount(0);
        setDate("");
    }

    /**
     * @param {import("react").ChangeEvent<HTMLInputElement>} event 
     * @returns {void}
     */
    function titleChangeHandler(event) {
        setTitle(event.currentTarget.value);
    }

    /**
     * @param {import("react").ChangeEvent<HTMLInputElement>} event 
     * @returns {void}
     */
    function amountChangeHandler(event) {
        setAmount(parseFloat(event.currentTarget.value));
    }

    /**
     * @param {import("react").ChangeEvent<HTMLInputElement>} event 
     * @returns {void}
     */
    function dateChangeHandler(event) {
        setDate(event.currentTarget.value);
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" required onChange={titleChangeHandler} placeholder="Enter expense name here" value={title} />
                </div>
                <div className="new-expense__control">
                    <label>Amount in EUR</label>
                    <input type="number" required onChange={amountChangeHandler} step={0.01} min={0.01} value={amount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" required onChange={dateChangeHandler} value={date.toString()} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;