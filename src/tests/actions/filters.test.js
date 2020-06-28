import { 
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount,
  sortByDate
} from '../../actions/filters'
import moment from 'moment';
test('should generate set start date action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toStrictEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0))
  expect(action).toStrictEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})

test('should generate set text filter action object', () => {
  const text = 'asd'
  const action = setTextFilter(text)
  expect(action).toStrictEqual({
    type: 'TEXT_FILTER',
    text
  })
})

test('should generate sort by date filter action', () => {
  const action = sortByDate()
  expect(action).toStrictEqual({
    type: 'SORT_BY_DATE',
  })
})

test('should generate sort by amount filter action', () => {
  const action = sortByAmount()
  expect(action).toStrictEqual({
    type: 'SORT_BY_AMOUNT'
  })
})