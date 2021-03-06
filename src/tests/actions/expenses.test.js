import { 
  startAddExpense,
  addExpense,
  editExpense, 
  removeExpense, 
  setExpenses, 
  startSetExpenses, 
  startRemoveExpense, 
  startEditExpense
} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import database from '../../firebase/firebase'

const uid = 'test_UID'
const defaultAuthState = { auth: { uid } }
const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
  const expensesData = {}
  expenses.forEach(({ id, description, note, amount, createdAt}) => {
    expensesData[id] = { description, note, amount, createdAt}
  })
  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => {
    done()
  })
})

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
  const action = addExpense(expenses[2])
  expect(action).toStrictEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
})

test('should add expense to database and store', (done) => {
  const store = createMockStore(defaultAuthState)
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  }
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toStrictEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toStrictEqual(expenseData)
    done()
  })
})

test('should add expense with default to database and store', (done) => {
  const store = createMockStore(defaultAuthState)
  const expenseDefaults = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  }
  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toStrictEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefaults
      }
    })
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toStrictEqual(expenseDefaults)
    done()
  })
})

test('should setup set expense action with data', () => {
  const action = setExpenses(expenses)
  expect(action).toStrictEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})

test('should fetch the expenses from firebase', (done) => {
  const store = createMockStore(defaultAuthState)
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toStrictEqual({
      type: 'SET_EXPENSES',
      expenses
    })
    done()
  })
})

test('should remove expense from firebase database', (done) => {
  const store = createMockStore(defaultAuthState)
  const id = expenses[2].id
  store.dispatch(startRemoveExpense({ id })).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toStrictEqual({
      type: 'REMOVE_EXPENSE',
      id
    })
    return database.ref(`users/${uid}/expenses/${id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy()
    done()
  })
})

test('should update expense in firebase database', (done) => {
  const store = createMockStore(defaultAuthState)
  const id = expenses[0].id
  const updates = { amount: 21045 }
  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toStrictEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    })
    return database.ref(`users/${uid}/expenses/${id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val().amount).toBe(updates.amount)
    done()
  })
})