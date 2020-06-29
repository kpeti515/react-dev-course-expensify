import React from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment';
import numeral from 'numeral'
numeral.register('locale', 'hu', {
  delimiters: {
      thousands: ' ',
      decimal: ','
  },
  abbreviations: {
      thousand: 'K',
      million: 'M',
      billion: 'B',
      trillion: 'T'
  },
  ordinal : function (number) {
      return number === 1 ? 'er' : 'ème';
  },
  currency: {
      symbol: 'HUF'
  }
});
numeral.locale('hu');
// itt miért nem kell már props.expenses.descr/amount/createdAt hanem elég a props.descr.???
export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div 
  className="expense"
  >
    <Link to={`edit/${id}`}>
    <h3 className="expenseDescription">Item: {description}</h3>
    </Link>
    <p className="expenseAmount">Amount :{numeral(amount/100).format('0,0[.]00 $')}</p>
    <p className="expenseCreatedAt">Created at: {moment(createdAt).format('YYYY MMMM Do')}</p>
    
  </div>
)

export default ExpenseListItem
