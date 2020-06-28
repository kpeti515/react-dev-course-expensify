import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
  const action = removeExpense({id:'123abc'})
  expect(action).toStrictEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should setup expense action object', () => {
  const action = editExpense('123', {note: 'new note value'})
  expect(action).toStrictEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates:  {
      note: 'new note value'
    }
  })
})

test('should setup add expense object with provided value', () => {
  const expenseData = {
    description: 'rent', 
    amount:10950,
    createdAt: 1000,
    note: 'this was last month rent'
  }
  const action = addExpense(expenseData)
  expect(action).toStrictEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})
test('should setup addexpense actio object with default values', () => {
  const action= addExpense()
  expect(action).toStrictEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      createdAt: 0,
      amount: 0
    }
  })
})