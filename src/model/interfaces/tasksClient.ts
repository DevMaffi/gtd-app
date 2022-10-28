export interface ITask {
  _id: string
  title: string
}

export interface TasksResponse {
  [dueDate: string]: ITask[]
}

export interface ITasksClient {
  getAll(): Promise<TasksResponse>
  getByInterval(startDate: Date, endDate: Date): Promise<TasksResponse>
}
