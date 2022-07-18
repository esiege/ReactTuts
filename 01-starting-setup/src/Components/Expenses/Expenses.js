import { useState } from "react";

import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeEventHandler = (event) => {
    setFilterYear(event.target.value);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear() == filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onFilterChange={filterChangeEventHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} filterYear={filterYear} />
    </Card>
  );
}

export default Expenses;
