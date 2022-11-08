export interface CounterState {
  value: number
}

export enum CounterActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  INCREMENT_BY_AMOUNT = 'INCREMENT_BY_AMOUNT',
}

interface IncrementCounterAction {
  type: CounterActionTypes.INCREMENT
}

interface DecrementCounterAction {
  type: CounterActionTypes.DECREMENT
}

interface IncrementByAmountCounterAction {
  type: CounterActionTypes.INCREMENT_BY_AMOUNT
  payload: number
}

export type CounterAction =
  | IncrementCounterAction
  | DecrementCounterAction
  | IncrementByAmountCounterAction
