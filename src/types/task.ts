import { ITasksResponse } from 'model/interfaces'

export type TaskState = {
  tasks: ITasksResponse
  areTasksLoading: boolean
  tasksError: string | null
}

export enum TaskActionTypes {
  FETCH_TASKS_PENDING = 'FETCH_TASKS_PENDING',
  FETCH_TASKS_FULFILLED = 'FETCH_TASKS_FULFILLED',
  FETCH_TASKS_REJECTED = 'FETCH_TASKS_REJECTED',
}

interface FetchTasksPendingAction {
  type: TaskActionTypes.FETCH_TASKS_PENDING
}

interface FetchTasksFulfilledAction {
  type: TaskActionTypes.FETCH_TASKS_FULFILLED
  payload: ITasksResponse
}

interface FetchTasksRejectedAction {
  type: TaskActionTypes.FETCH_TASKS_REJECTED
  payload: string
}

export type TaskAction =
  | FetchTasksPendingAction
  | FetchTasksFulfilledAction
  | FetchTasksRejectedAction
