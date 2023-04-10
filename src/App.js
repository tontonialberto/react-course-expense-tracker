import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const EXPENSES = [
    { title: "Benzina", date: new Date(), priceUSD: 30 },
    { title: "Pomodori scaduti", date: new Date(), priceUSD: 50 },
    { title: "Sigarette", date: new Date(), priceUSD: 5.50 },
  ]
  return (
    <div className="container">
      {
        EXPENSES.map(expense => {
          return <ExpenseItem key={Math.random()} title={expense.title} date={expense.date} priceUSD={expense.priceUSD}></ExpenseItem>
        })
      }
    </div>
  );
}

export default App;
