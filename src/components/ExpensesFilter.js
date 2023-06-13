// @ts-check

import React from 'react';

import './ExpensesFilter.css';

/**
 * @param {object} props
 * @param {import('./types').OnExpenseFilterChangeHandler} props.onFilterChange
 */
function ExpensesFilter(props) {

    /**
     * @param {import('react').ChangeEvent<HTMLSelectElement>} event
     */
    function filterChangeHandler(event) {
        const year = parseInt(event.currentTarget.value);
        props.onFilterChange(year);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={filterChangeHandler}>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;