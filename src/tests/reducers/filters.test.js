import moment from 'moment'
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined,{type: '@@INIT'})
  expect(state).toStrictEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'})
  expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
  const currentState = {
    text : '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  }
  const action = {type : 'SORT_BY_DATE'}
  const state = filtersReducer(currentState, action)
  expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
  const action = {type: 'TEXT_FILTER', text: 'asd'}
  const state = filtersReducer(undefined, action)
  expect(state.text).toBe('asd')
})

test('should set startDate filter', () => {
  const action = { type: 'SET_START_DATE', startDate: moment().fromNow(4, 'days')}  
  const state = filtersReducer(undefined, action)
  expect(state.startDate).toStrictEqual(moment().fromNow(4, 'days'))
})

test('should set endDate filter', () => {
  const action = {type: 'SET_END_DATE', endDate: moment().fromNow(-4, 'days')}
  const state = filtersReducer(undefined, action)
  expect(state.endDate).toStrictEqual(moment().fromNow(-4, 'days'))
})