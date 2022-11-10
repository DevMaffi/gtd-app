import TasksService from 'services/fakeTasksService'
import { TasksApi } from 'model/classes'

export const tasksService = new TasksService(new TasksApi())
