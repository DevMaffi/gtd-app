export type ArrowFn<T = any> = (...args: any[]) => T

export type DropdownOptionValue = string | number

export type DropdownOption = {
  readonly _id: string
  value: DropdownOptionValue
}

export type SetDropdownFn<T> = (dropdownView: T) => void

export interface DropdownRenderPropArgs<T> {
  isOpen: boolean
  dropdownView: T
  onDropdown: SetDropdownFn<T>
}

export type MonthSelectorDropdownView = 'year' | 'month' | null
