import { v4 } from 'uuid'
import { ITask, ITasksResponse, ITasksClient } from 'model/interfaces'
import { Bind } from 'types/decorators'

class TasksApi implements ITasksClient {
  private tasks = {
    [new Date(2022, 8, 27).toDateString()]: [
      { _id: v4(), title: 'Prepare for meeting' },
      { _id: v4(), title: 'Take 🐶 out for a walk' },
      { _id: v4(), title: 'Send follow up email' },
    ],
    [new Date(2022, 8, 29).toDateString()]: [
      { _id: v4(), title: 'Conduct user testing' },
      { _id: v4(), title: 'Organize feedback' },
      { _id: v4(), title: 'Launch new product' },
      { _id: v4(), title: 'Iterate, iterate, iterate' },
    ],
    [new Date(2022, 8, 30).toDateString()]: [
      { _id: v4(), title: 'Research product' },
      { _id: v4(), title: 'Write blog' },
    ],
    [new Date(2022, 9, 2).toDateString()]: [
      { _id: v4(), title: 'Take 🐶 out for a walk' },
      { _id: v4(), title: 'Deploy new site' },
      { _id: v4(), title: 'Meet with friends' },
    ],
    [new Date(2022, 9, 4).toDateString()]: [
      { _id: v4(), title: 'Research v1 personas' },
      { _id: v4(), title: 'Update analytics metrics for 2.0' },
      { _id: v4(), title: 'Meet the beta users' },
    ],
    [new Date(2022, 9, 5).toDateString()]: [
      { _id: v4(), title: 'Edit user training guide' },
      { _id: v4(), title: 'Deploy new update' },
    ],
    [new Date(2022, 9, 7).toDateString()]: [
      { _id: v4(), title: '🤝 Unsplash partnership' },
      { _id: v4(), title: 'Integrate Stripe to SRM' },
      { _id: v4(), title: 'Improve Search' },
    ],
    [new Date(2022, 9, 10).toDateString()]: [
      { _id: v4(), title: 'Improve sharing workflow' },
      { _id: v4(), title: 'Multiple email logins' },
    ],
    [new Date(2022, 9, 13).toDateString()]: [
      { _id: v4(), title: 'Add one of this emojis: 😇🐶🌮' },
      { _id: v4(), title: 'Define new emojis to be added' },
      { _id: v4(), title: 'Improve third party integrations' },
    ],
    [new Date(2022, 9, 15).toDateString()]: [
      { _id: v4(), title: 'Landing page redesign' },
    ],
    [new Date(2022, 9, 16).toDateString()]: [
      { _id: v4(), title: 'Take 🐶 out for a walk' },
      { _id: v4(), title: 'Watch movies with family' },
    ],
    [new Date(2022, 9, 18).toDateString()]: [
      { _id: v4(), title: 'IOS code update' },
      { _id: v4(), title: 'Android code update' },
      { _id: v4(), title: 'Lazy loading improve' },
    ],
    [new Date(2022, 9, 19).toDateString()]: [
      { _id: v4(), title: 'Debug slow queries' },
      { _id: v4(), title: 'Performance improvements for Teams' },
      { _id: v4(), title: 'Mobile speed improvement' },
    ],
    [new Date(2022, 9, 20).toDateString()]: [
      { _id: v4(), title: 'Faster login' },
      { _id: v4(), title: 'Invalid email domains' },
    ],
    [new Date(2022, 9, 21).toDateString()]: [
      { _id: v4(), title: 'Add authentication options' },
      { _id: v4(), title: 'Trello import' },
      { _id: v4(), title: 'Rewrite query caching logic' },
    ],
    [new Date(2022, 9, 23).toDateString()]: [
      { _id: v4(), title: 'Meet with friends' },
    ],
    [new Date(2022, 9, 24).toDateString()]: [
      { _id: v4(), title: 'Share mockup with reviewers' },
      { _id: v4(), title: 'Research first round of feedback' },
      { _id: v4(), title: 'Make edits based on feedback' },
    ],
    [new Date(2022, 9, 26).toDateString()]: [
      { _id: v4(), title: 'Present version two to reviewers' },
      { _id: v4(), title: 'Share with UX team' },
      { _id: v4(), title: 'Build!' },
      { _id: v4(), title: 'Ship!' },
    ],
    [new Date(2022, 9, 28).toDateString()]: [
      { _id: v4(), title: 'Take 🐶 out for a walk' },
      { _id: v4(), title: 'Meet with friends' },
    ],
    [new Date(2022, 9, 29).toDateString()]: [
      { _id: v4(), title: 'Debug queries' },
      { _id: v4(), title: 'Database tuning' },
    ],
    [new Date(2022, 10, 6).toDateString()]: [
      { _id: v4(), title: 'Visit conference' },
      { _id: v4(), title: 'Watch movie with friends' },
    ],
  }

  private async delay(delay: number): Promise<void> {
    return new Promise(res =>
      setTimeout(() => {
        res()
      }, delay)
    )
  }

  @Bind
  async getAll(): Promise<ITasksResponse> {
    return this.tasks
  }

  @Bind
  async getByInterval(startDate: Date, endDate: Date): Promise<ITasksResponse> {
    await this.delay(100)

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

    const response: ITasksResponse = {}

    while (start.getTime() <= end.getTime()) {
      const tasks: ITask[] = this.tasks[start.toDateString()]
      if (tasks) response[start.toDateString()] = tasks

      start.setDate(start.getDate() + 1)
    }

    return response
  }
}

export default TasksApi
