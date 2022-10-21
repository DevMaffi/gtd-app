export type ArrowFn<T = any> = (...args: any[]) => T

export interface TasksResponse {
  [dueDate: string]: { _id: string; title: string }[]
}

export type SetDropdownFn = (dropdownView: any) => void

export interface DropdownRenderPropArgs {
  isOpen: boolean
  dropdownView: any
  onDropdown: SetDropdownFn
}
