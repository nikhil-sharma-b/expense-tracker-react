import { useState } from "react/cjs/react.development";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "PC game",
    amount: 950,
    date: new Date(2021, 8, 27),
  },
  {
    id: "e2",
    title: "TV",
    amount: 28250,
    date: new Date(2021, 3, 22),
  },
  {
    id: "e3",
    title: "Bluetooh Headset",
    amount: 3550,
    date: new Date(2020, 3, 21),
  },
  {
    id: "e4",
    title: "Wooden Desk (Custom)",
    amount: 59650,
    date: new Date(2020, 8, 27),
  },
];

const App = function () {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
