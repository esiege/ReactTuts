import { useState } from "react";
import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear() == props.filterYear
  );

  if (props.items.length == 0) return <div>No results found.</div>;

  return filteredExpenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
};

export default ExpensesList;
