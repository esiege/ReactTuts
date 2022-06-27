import { useState } from "react";

import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeEventHandler = (event) => {
    setFilterYear(event.target.value);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onFilterChange={filterChangeEventHandler}
      />
      <ExpensesList items={props.expenses} filterYear={filterYear} />
    </Card>
  );
}

export default Expenses;
