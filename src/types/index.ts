export type ArrowFn<T = any> = (...args: any[]) => T

export interface ITask {
  _id: string
  title: string
}

export interface TasksResponse {
  [dueDate: string]: ITask[]
}

export type DropdownOption = {
  _id: string
  value: string | number
}

export type SetDropdownFn<T> = (dropdownView: T) => void

export interface DropdownRenderPropArgs<T> {
  isOpen: boolean
  dropdownView: T
  onDropdown: SetDropdownFn<T>
}

export type MonthSelectorDropdownView = 'year' | 'month' | null
