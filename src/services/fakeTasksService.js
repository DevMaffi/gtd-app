import { v4 } from 'uuid'

class TasksService {
  static #tasks = {
    [new Date(2021, 11, 30).toDateString()]: [
      { _id: v4(), title: 'Task 1' },
      { _id: v4(), title: 'Task 2' },
      { _id: v4(), title: 'Task 3' },
    ],
    [new Date(2022, 6, 6).toDateString()]: [
      { _id: v4(), title: 'Task 1' },
      { _id: v4(), title: 'Task 2' },
    ],
    [new Date(2022, 7, 30).toDateString()]: [
      { _id: v4(), title: 'Watch movie' },
      { _id: v4(), title: 'Buy new books' },
    ],
    [new Date(2022, 8, 15).toDateString()]: [
      { _id: v4(), title: 'Morning running' },
      { _id: v4(), title: 'Start learning React JS library' },
      { _id: v4(), title: 'Spend time with family' },
      { _id: v4(), title: 'New task+' },
    ],
    [new Date(2022, 8, 16).toDateString()]: [
      { _id: v4(), title: 'Read book' },
      { _id: v4(), title: 'Go to gym' },
    ],
    [new Date(2022, 9, 1).toDateString()]: [
      { _id: v4(), title: 'Visit courses' },
      { _id: v4(), title: 'Meet with friends' },
      { _id: v4(), title: 'Complete project' },
    ],
    [new Date(2023, 0, 1).toDateString()]: [
      { _id: v4(), title: 'Task 1' },
      { _id: v4(), title: 'Task 2' },
      { _id: v4(), title: 'Task 3' },
    ],
  }

  static getAll = async () => this.#tasks

  static getByInterval = async (startDate, endDate) => {
    const start = new Date(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate()
    )

    const end = new Date(
      endDate.getFullYear(),
      endDate.getMonth(),
      endDate.getDate() + 1
    )

    const response = {}

    while (start.getTime() <= end.getTime()) {
      const tasks = this.#tasks[start.toDateString()]
      if (tasks) response[start.toDateString()] = tasks

      start.setDate(start.getDate() + 1)
    }

    return response
  }
}

export default TasksService
