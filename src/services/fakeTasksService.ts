import { ITasksClient } from 'model/interfaces'
import { Bind } from 'types/decorators'

class TasksService implements ITasksClient {
  constructor(private tasksClient: ITasksClient) {}

  @Bind
  getAll() {
    return this.tasksClient.getAll()
  }

  @Bind
  getByInterval(startDate: Date, endDate: Date) {
    return this.tasksClient.getByInterval(startDate, endDate)
  }
}

export default TasksService
