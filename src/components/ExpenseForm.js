// @ts-check

import React from "react";
import "./ExpenseForm.css";


function ExpenseForm() {
    /** @type {string} */
    let title = "";

    /** @type {number} */
    let amount = 0;

    /** @type {Date} */
    let date = new Date();

    /**
     * 
     * @param {import("react").FormEvent<HTMLFormElement>} event 
     * @returns {void}
     */
    function formSubmitHandler(event) {
        event.preventDefault();

        console.log({
            title,
            amount,
            date,
        })
    }

    /**
     * @param {import("react").FormEvent<HTMLInputElement>} event 
     * @returns {void}
     */
    function titleChangeHandler(event) {
        title = event.currentTarget.value;
    }

    /**
     * @param {import("react").FormEvent<HTMLInputElement>} event 
     * @returns {void}
     */
    function amountChangeHandler(event) {
        amount = parseFloat(event.currentTarget.value);
    }

    /**
     * @param {import("react").FormEvent<HTMLInputElement>} event 
     * @returns {void}
     */
    function dateChangeHandler(event) {
        const { value } = event.currentTarget;
        const [year, month, day] = value.split("-");
        date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" required onChange={titleChangeHandler} placeholder="Enter expense name here" />
                </div>
                <div className="new-expense__control">
                    <label>Amount in EUR</label>
                    <input type="number" required onChange={amountChangeHandler} defaultValue={0} step={0.01} min={0.01} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" required onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;