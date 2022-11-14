import { TaskAction, TaskActionTypes, TaskState } from 'types/task'

const initialState: TaskState = {
  tasks: {},
  areTasksLoading: false,
  tasksError: null,
}

const taskReducer = (state = initialState, action: TaskAction): TaskState => {
  switch (action.type) {
    case TaskActionTypes.FETCH_TASKS_PENDING:
      return {
        ...state,
        areTasksLoading: true,
      }

    case TaskActionTypes.FETCH_TASKS_FULFILLED:
      return {
        ...state,
        tasks: { ...state.tasks, ...action.payload },
        areTasksLoading: false,
      }

    case TaskActionTypes.FETCH_TASKS_REJECTED:
      return {
        ...state,
        areTasksLoading: false,
        tasksError: action.payload,
      }

    case TaskActionTypes.START_TASK_DRUGGING:
      return {
        ...state,
        taskDruggingMeta: action.payload,
      }

    case TaskActionTypes.UPDATE_TASKS:
      return {
        ...state,
        tasks: action.payload,
      }

    default:
      return state
  }
}

export default taskReducer
