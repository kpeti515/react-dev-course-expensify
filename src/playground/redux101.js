import { createStore } from 'redux'

// Action generators
// const add = ({a, b}, c) => {
//   return a + b + c
// }
// console.log(add({a: 1, b: 12}, 1000))

const incrementCount = ({incrementBy = 1} =  {}) => ({
    type: 'INCREMENT',
    incrementBy
  })

const decrementCount = ({decrementBy = 1} =  {}) => ({
  type: 'DECREMENT',
  decrementBy
})  

const setCount = ({ count } =  {}) => ({
  type: 'SET',
  count
}) 

const resetCount = () => ({
  type: 'RESET'
}) 

// Reducers
// 1. reducers are pure functions
// 2. Never change state or action

const countReducer = (state =  { count: 0 }, action) => {
  switch (action.type){
    case 'INCREMENT' :
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
      return {
        count: state.count + action.incrementBy
      }
      case 'DECREMENT' :
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
      return {
        count: state.count - decrementBy
      }
      case 'RESET':
        return {
          count: 0
        }
        case 'SET':
          return {
            count: action.count
          }
    default:
      return state  
    }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// store.dispatch({
//   type: 'INCREMENT', // redux convention: FIRSTWORD_SECONDOWRD
//   incrementBy: 5
// })
store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())
store.dispatch(resetCount())

store.dispatch(decrementCount({ decrementBy: 1012 }))


store.dispatch(decrementCount())

store.dispatch( resetCount(101))
unsubscribe()
