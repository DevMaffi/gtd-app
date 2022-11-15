import classNames from 'classnames'
import { CalendarTasksList } from 'components/calendar'
import { useActions, useTypedSelector } from 'hooks'
import { ITasksResponse } from 'model/interfaces'
import './calendarCell.sass'

export interface CalendarCellProps {
  dueDate: string
  dateNumber: number
  prev: boolean
  next: boolean
  today: boolean
  passed: boolean
}

const CalendarCell: React.FC<CalendarCellProps> = ({
  dueDate,
  dateNumber,
  prev,
  next,
  today,
  passed,
}) => {
  const { tasks, taskDruggingMeta } = useTypedSelector(state => state.task)

  const { updateTasks } = useActions()

  const cellClasses = classNames('calendar__cell', {
    'text-light': !prev && !next,
    today,
    passed,
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

    if (!taskDruggingMeta || dueDate === taskDruggingMeta.prevDueDate) return

    const tasksCopy: ITasksResponse = { ...tasks }
    tasksCopy[taskDruggingMeta.prevDueDate] = [
      ...tasks[taskDruggingMeta.prevDueDate],
    ].filter(t => t._id !== taskDruggingMeta.selectedTask._id)

    tasksCopy[dueDate] = [
      ...(tasks[dueDate] || []),
      taskDruggingMeta.selectedTask,
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
      <CalendarTasksList dueDate={dueDate} />
    </div>
  )
}

export default CalendarCell
