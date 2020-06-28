import expensesReducer from "../../reducers/expenses";
import expenses from '../fixtures/expenses'

test('shouuld set default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual([])
})

test('Should remove expense by ID', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toStrictEqual([expenses[0], expenses[2]])
})

test('Should not remove expense by false ID', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toStrictEqual(expenses)
})

test('shoud add an expense', () => {
  const expense = {
    id: '109',
    description: 'Laptop',
    note: '',
    createdAt:  20000,
    amount: 29500
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action)
  expect(state).toStrictEqual([...expenses, expense])
})

test('should edit an expense', () => {
  const amount = 12000
  const action = {
    type: 'EDIT_EXPENSE',
    id:expenses[1].id,
    updates: {
      amount
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state[1].amount).toBe(amount)
})

test('should edit an expense', () => {
  const amount = 12000
  const action = {
    type: 'EDIT_EXPENSE',
    id:'-1',
    updates: {
      amount
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toStrictEqual(expenses)
})