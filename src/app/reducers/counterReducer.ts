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
        ...state,
        value: state.value + 1,
      }

    case CounterActionTypes.DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      }

    case CounterActionTypes.INCREMENT_BY_AMOUNT:
      return {
        ...state,
        value: state.value + action.payload,
      }

    default:
      return state
  }
}

export default counterReducer
