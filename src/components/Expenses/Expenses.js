import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filter, setfilter] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setfilter(selectedYear);
    console.log(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filter;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filter}
          onChangeFileter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
