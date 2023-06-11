// @ts-check
import React from 'react';
import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

function App() {

  const EXPENSES = [ 
    { title: "Benzina", date: new Date(), priceEUR: 30 },
    { title: "Pomodori scaduti", date: new Date(), priceEUR: 50 },
    { title: "Sigarette", date: new Date(), priceEUR: 5.50 },
  ]
  return (
    <div className="container">
      <NewExpense/>
      <Expenses expenses={EXPENSES}></Expenses>
    </div>
  );
}

export default App;
