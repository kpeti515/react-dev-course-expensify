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
  ordinal: function (number) {
    return number === 1 ? 'er' : 'ème';
  },
  currency: {
    symbol: 'HUF'
  }
});
numeral.locale('hu');
// itt miért nem kell már props.expenses.descr/amount/createdAt hanem elég a props.descr.???
export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <Link to={`edit/${id}`} className="list-item">
    <div>
      <h3 className="list-item__title">Item: {description}</h3>
      <span className="list-item__sub-title">Created at: {moment(createdAt).format('YYYY MMMM Do')}</span>
    </div>
    <h3 className="list-item__data">Amount :{numeral(amount / 100).format('0,0[.]00 $')}</h3>



  </Link>
)

export default ExpenseListItem
