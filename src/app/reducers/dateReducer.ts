import { DateAction, DateActionTypes, DateState } from 'types/date'
import { getEnvDate } from 'utils/date'

const initialState: DateState = {
  timestamp: getEnvDate().getTime(),
}

const dateReducer = (state = initialState, action: DateAction): DateState => {
  switch (action.type) {
    case DateActionTypes.SET_INITIAL_DATE:
      return {
        ...state,
        timestamp: new Date(2022, 0, 1).getTime(),
      }

    case DateActionTypes.CHANGE_DATE:
      return {
        ...state,
        timestamp: action.payload,
      }

    default:
      return state
  }
}

export default dateReducer
