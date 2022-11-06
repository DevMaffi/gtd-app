import { DateAction, DateActionTypes, DateState } from 'types/date'
import { getEnvDate } from 'utils/date'

const initialState: DateState = getEnvDate().getTime()

const dateReducer = (state = initialState, action: DateAction): DateState => {
  switch (action.type) {
    case DateActionTypes.SET_INITIAL_DATE:
      return new Date(2022, 0, 1).getTime()

    case DateActionTypes.CHANGE_DATE:
      return action.payload

    default:
      return state
  }
}

export default dateReducer
