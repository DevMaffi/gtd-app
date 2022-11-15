import { DateAction, DateActionTypes } from 'types/date'

export const setInitialDate = (): DateAction => ({
  type: DateActionTypes.SET_INITIAL_DATE,
})

export const changeDate = (timestamp: number): DateAction => ({
  type: DateActionTypes.CHANGE_DATE,
  payload: timestamp,
})
