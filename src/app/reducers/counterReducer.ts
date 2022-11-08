import { CounterAction, CounterActionTypes, CounterState } from 'types/counter'

const initialState: CounterState = {
  value: 0,
}

const counterReducer = (
  state = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return {
        value: state.value + 1,
      }

    case CounterActionTypes.DECREMENT:
      return {
        value: state.value - 1,
      }

    case CounterActionTypes.INCREMENT_BY_AMOUNT:
      return {
        value: state.value + action.payload,
      }

    default:
      return state
  }
}

export default counterReducer
