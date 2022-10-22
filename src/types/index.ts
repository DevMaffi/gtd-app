export type ArrowFn<T = any> = (...args: any[]) => T

export interface ITask {
  _id: string
  title: string
}

export interface TasksResponse {
  [dueDate: string]: ITask[]
}

export type MonthSelectorDropdownView = 'year' | 'month' | null
export type MonthSelectorDropdownOption = string | number

export type SetDropdownFn = (dropdownView: any) => void

export interface DropdownRenderPropArgs {
  isOpen: boolean
  dropdownView: any
  onDropdown: SetDropdownFn
}
