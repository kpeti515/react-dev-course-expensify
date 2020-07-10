import { login, logout } from '../../actions/auth'

test('should generate login action object', () => {
  const uid= 'asd123'
  const action = login(uid)
  expect(action).toStrictEqual({
    type: 'LOGIN',
    uid
  })
})

test('should generate logout action object', () => {
  const action = logout()
  expect(action).toStrictEqual({
    type: 'LOGOUT'
  })
})