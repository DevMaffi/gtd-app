import { DateAction, DateActionTypes } from 'types/date'

export const changeDate = (timestamp: number): DateAction => ({
  type: DateActionTypes.CHANGE_DATE,
  payload: timestamp,
})
