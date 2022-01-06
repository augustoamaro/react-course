import ExpenseItem from "./components/ExpenseItem";

const App = () => {
  const expenses = [
    { id: 'e1', title: 'Banana', amount: 2.99, date: new Date(2022, 0, 6) },
    { id: 'e2', title: 'Apple', amount: 4.99, date: new Date(2022, 0, 6) },
    { id: 'e3', title: 'Grape', amount: 4.99, date: new Date(2022, 0, 6) },
    { id: 'e4', title: 'Blueberry', amount: 7.99, date: new Date(2022, 0, 6) },
  ];

  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;