import React from 'react';
import { Link } from 'react-router-dom'
// itt miért nem kell már props.expenses.descr/amount/createdAt hanem elég a props.descr.???
export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div 
  className="expense"
  >
    <Link to={`edit/${id}`}>
    <h3 className="expenseDescription">Item: {description}</h3>
    </Link>
    <p className="expenseAmount">Amount :{amount}</p>
    <p className="expenseCreatedAt">Created at: {createdAt}</p>
    
  </div>
)

export default ExpenseListItem
