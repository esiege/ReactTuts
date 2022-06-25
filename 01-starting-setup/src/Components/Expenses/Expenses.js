import { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeEventHandler = (event) => {
    setFilterYear(event.target.value);
    console.log(event.target.value);
  };

  console.log(props.expenses);
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onFilterChange={filterChangeEventHandler}
      />

      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
