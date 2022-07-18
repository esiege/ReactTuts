import { useState } from "react";
import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length == 0)
    return <h2 className="expenses-filter">No results found.</h2>;

  return props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
};

export default ExpensesList;
