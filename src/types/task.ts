import { ITask, ITasksResponse } from 'model/interfaces'

export interface TaskDruggingMeta {
  selectedTask: ITask
  prevDueDate: string
}

export type TaskState = {
  tasks: ITasksResponse
  areTasksLoading: boolean
  tasksError: string | null
  taskDruggingMeta?: TaskDruggingMeta
}

export enum TaskActionTypes {
  FETCH_TASKS_PENDING = 'FETCH_TASKS_PENDING',
  FETCH_TASKS_FULFILLED = 'FETCH_TASKS_FULFILLED',
  FETCH_TASKS_REJECTED = 'FETCH_TASKS_REJECTED',
  START_TASK_DRUGGING = 'START_TASK_DRUGGING',
  UPDATE_TASKS = 'UPDATE_TASKS',
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

interface StartTaskDruggingAction {
  type: TaskActionTypes.START_TASK_DRUGGING
  payload: TaskDruggingMeta
}

interface UpdateTasks {
  type: TaskActionTypes.UPDATE_TASKS
  payload: ITasksResponse
}

export type TaskAction =
  | FetchTasksPendingAction
  | FetchTasksFulfilledAction
  | FetchTasksRejectedAction
  | StartTaskDruggingAction
  | UpdateTasks
