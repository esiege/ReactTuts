import { useState } from "react";
import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear() == props.filterYear
  );

  if (filteredExpenses.length == 0)
    return <h2 className="expenses-filter">No results found.</h2>;

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
