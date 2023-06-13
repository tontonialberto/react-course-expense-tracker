// @ts-check

import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

function App() {

  const [expenses, setExpenses] = useState([ 
    { title: "Benzina", date: new Date(), priceEUR: 30 },
    { title: "Pomodori scaduti", date: new Date(), priceEUR: 50 },
    { title: "Sigarette", date: new Date(), priceEUR: 5.50 },
  ]);

  /** @type { import('./components/types').OnExpenseDataHandler } */
  function newExpenseHandler(expense) {
    setExpenses((oldExpenses) => {
      return [
        ...oldExpenses,
        {
          title: expense.title,
          priceEUR: expense.amount,
          date: expense.date,
        },
      ];
    });
  }

  return (
    <div className="container">
      <NewExpense onNewExpense={newExpenseHandler}/>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
