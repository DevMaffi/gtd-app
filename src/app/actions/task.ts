import { Dispatch } from '@reduxjs/toolkit'
import { HttpFetchCallback, TaskAction, TaskActionTypes } from 'types'
import { ITask, ITasksResponse } from 'model/interfaces'

export const fetchTasksPendingActionCreator = (): TaskAction => ({
  type: TaskActionTypes.FETCH_TASKS_PENDING,
})

export const fetchTasksFulfilledActionCreator = (
  response: ITasksResponse
): TaskAction => ({
  type: TaskActionTypes.FETCH_TASKS_FULFILLED,
  payload: response,
})

export const fetchTasksRejectedActionCreator = (
  message: string
): TaskAction => ({
  type: TaskActionTypes.FETCH_TASKS_REJECTED,
  payload: message,
})

export const fetchTasks = (callback: HttpFetchCallback<ITasksResponse>) => {
  return async (dispatch: Dispatch<TaskAction>): Promise<void> => {
    try {
      dispatch(fetchTasksPendingActionCreator())

      const response = await callback()
      dispatch(fetchTasksFulfilledActionCreator(response))
    } catch (error) {
      let message = 'Unknown Error'
      if (error instanceof Error) message = error.message

      dispatch(fetchTasksRejectedActionCreator(message))
    }
  }
}

export const startTaskDrugging = (
  selectedTask: ITask,
  prevDueDate: string
): TaskAction => ({
  type: TaskActionTypes.START_TASK_DRUGGING,
  payload: { selectedTask, prevDueDate },
})

export const updateTasks = (tasks: ITasksResponse): TaskAction => ({
  type: TaskActionTypes.UPDATE_TASKS,
  payload: tasks,
})
