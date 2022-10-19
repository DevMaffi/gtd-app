export interface TasksResponse {
  [dueDate: string]: { _id: string; title: string }[]
}
