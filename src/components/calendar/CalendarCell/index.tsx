import classNames from 'classnames'
import { CalendarTasksList } from 'components/calendar'
import { useActions, useTypedSelector } from 'hooks'
import { ITask, ITasksResponse } from 'model/interfaces'
import './calendarCell.sass'

export interface CalendarCellProps {
  dueDate: string
  dateNumber: number
  attachedTasks: ITask[]
  prev: boolean
  next: boolean
  today: boolean
  overdue: boolean
}

const CalendarCell: React.FC<CalendarCellProps> = ({
  dueDate,
  dateNumber,
  attachedTasks,
  prev,
  next,
  today,
  overdue,
}) => {
  const { tasks, druggingTaskMeta } = useTypedSelector(state => state.task)

  const { updateTasks } = useActions()

  const cellClasses = classNames('calendar__cell', {
    'text-light': !prev && !next,
    today,
    overdue,
  })

  const getCellElement = (eventTarget: Element): HTMLDivElement => {
    let cellElement = eventTarget as HTMLDivElement

    if (eventTarget.getAttribute('data-date-number'))
      cellElement = eventTarget.parentNode as HTMLDivElement

    if (eventTarget.classList.contains('calendar__tasks'))
      cellElement = eventTarget.parentNode as HTMLDivElement

    if (eventTarget.classList.contains('calendar__task')) {
      const tasksListElement = eventTarget.parentNode as HTMLDivElement
      cellElement = tasksListElement.parentNode as HTMLDivElement
    }

    return cellElement
  }

  const dragOverHandler = (e: React.DragEvent<Element>): void => {
    e.preventDefault()

    const eventTarget = e.target as Element
    const cellElement = getCellElement(eventTarget)

    cellElement.classList.add('active')
  }

  const dragLeaverHandler = (e: React.DragEvent<Element>): void => {
    e.preventDefault()

    const eventTarget = e.target as Element
    eventTarget.classList.remove('active')
  }

  const dropHandler = (e: React.DragEvent<Element>): void => {
    e.preventDefault()

    const eventTarget = e.target as Element
    const cellElement = getCellElement(eventTarget)

    cellElement.classList.remove('active')

    if (!druggingTaskMeta || dueDate === druggingTaskMeta.prevDueDate) return

    const tasksCopy: ITasksResponse = { ...tasks }
    tasksCopy[druggingTaskMeta.prevDueDate] = [
      ...tasks[druggingTaskMeta.prevDueDate],
    ].filter(t => t._id !== druggingTaskMeta.selectedTask._id)

    tasksCopy[dueDate] = [
      ...(attachedTasks || []),
      druggingTaskMeta.selectedTask,
    ]

    updateTasks(tasksCopy)
  }

  return (
    <div
      onDragOver={dragOverHandler}
      onDragLeave={dragLeaverHandler}
      onDrop={dropHandler}
      className={cellClasses}
    >
      <span data-date-number>{dateNumber}</span>
      <CalendarTasksList dueDate={dueDate} tasks={attachedTasks} />
    </div>
  )
}

export default CalendarCell
