import { useState } from "react";
import "./App.css";
import ExpenseForm from "./Components/Forms/ExpenseForm";
import Expenselist from "./Components/Forms/Expenseslist";

function App() {
  const [expenses, setExpenses] = useState([]);
  const IncomingExpenses = ({ itemName, productid, price }, id) => {
    //console.log(id);
    setExpenses((preState) => {
      return [
        ...preState,
        {
          iname: itemName,
          productid: productid,
          price: price,
          id: id,
        },
      ];
    });
  };

  console.log(expenses);
  return (
    <div className="App">
      <ExpenseForm onIncomingExpenses={IncomingExpenses} />
      <Expenselist expenselist={expenses} setExpenses={setExpenses} />
    </div>
  );
}

export default App;
