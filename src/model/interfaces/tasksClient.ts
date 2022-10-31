export interface ITask {
  _id: string
  title: string
}

export interface ITasksResponse {
  [dueDate: string]: ITask[]
}

export interface ITasksClient {
  getAll(): Promise<ITasksResponse>
  getByInterval(startDate: Date, endDate: Date): Promise<ITasksResponse>
}
