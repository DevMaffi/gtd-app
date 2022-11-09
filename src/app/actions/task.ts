import { Dispatch } from '@reduxjs/toolkit'
import TasksService from 'services/fakeTasksService'
import { TaskAction, TaskActionTypes } from 'types/task'
import { TasksApi } from 'model/classes'

const tasksService = new TasksService(new TasksApi())

export const fetchTasks =
  (date: Date) =>
  async (dispatch: Dispatch<TaskAction>): Promise<void> => {
    try {
      dispatch({ type: TaskActionTypes.FETCH_TASKS_PENDING })

      /**
       * @type {Date} - First day of last month in year before current date
       */
      const startDate = new Date(date.getFullYear(), -1, 1)

      /**
       * @type {Date} - Last day of first month in year after current date
       */
      const endDate = new Date(date.getFullYear() + 1, 1, -1)

      /**
       * @type {Object} - Object of tasks that are in between startDate and
       * endDate
       */
      const response = await tasksService.getByInterval(startDate, endDate)

      dispatch({
        type: TaskActionTypes.FETCH_TASKS_FULFILLED,
        payload: response,
      })
    } catch (error) {
      let message: string = 'Unknown Error'
      if (error instanceof Error) message = error.message

      dispatch({
        type: TaskActionTypes.FETCH_TASKS_REJECTED,
        payload: message,
      })
    }
  }
