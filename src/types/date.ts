export type DateState = number

export enum DateActionTypes {
  SET_INITIAL_DATE = 'SET_INITIAL_DATE',
  CHANGE_DATE = 'CHANGE_DATE',
}

interface SetInitialDateAction {
  type: DateActionTypes.SET_INITIAL_DATE
}

interface ChangeDateAction {
  type: DateActionTypes.CHANGE_DATE
  payload: number
}

export type DateAction = SetInitialDateAction | ChangeDateAction
