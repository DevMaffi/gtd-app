import { CounterAction, CounterActionTypes } from 'types/counter'

export const increment = (): CounterAction => ({
  type: CounterActionTypes.INCREMENT,
})

export const decrement = (): CounterAction => ({
  type: CounterActionTypes.DECREMENT,
})

export const incrementByAmount = (amount: number): CounterAction => ({
  type: CounterActionTypes.INCREMENT_BY_AMOUNT,
  payload: amount,
})
