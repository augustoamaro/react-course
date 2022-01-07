import Expenses from "./components/Expenses";

const App = () => {
  const expenses = [
    { id: 'e1', title: 'Banana', amount: 2.99, date: new Date(2022, 0, 6) },
    { id: 'e2', title: 'Apple', amount: 4.99, date: new Date(2022, 0, 6) },
    { id: 'e3', title: 'Grape', amount: 4.99, date: new Date(2022, 0, 6) },
    { id: 'e4', title: 'Blueberry', amount: 7.99, date: new Date(2022, 0, 6) },
  ];

  return (
    <div>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;