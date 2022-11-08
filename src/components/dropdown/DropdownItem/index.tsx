import { useState } from 'react'
import classNames from 'classnames'
import { DropdownMenu } from 'components/dropdown'
import {
  ArrowFn,
  DropdownOption,
  SetDropdownFn,
  DropdownRenderPropArgs,
} from 'types/common'
import './dropdown.sass'

export type DropdownRenderProp<T> = ({
  isOpen,
  dropdownView,
  onDropdown,
}: DropdownRenderPropArgs<T>) => React.ReactNode

export interface DropdownProps<T> {
  setOptions: (dropdownView: T) => DropdownOption[]
  isActive: (dropdownView: T) => ArrowFn<boolean>
  isDefault: (dropdownView: T) => ArrowFn<boolean>
  onSelect: (
    dropdownView: T,
    onDropdown: SetDropdownFn<T>
  ) => ArrowFn<(optionIndex: number) => any>
  on: DropdownRenderProp<T>
}

const Dropdown = <T,>({
  setOptions,
  isActive,
  isDefault,
  onSelect,
  on: render,
}: DropdownProps<T>) => {
  const [dropdownView, setDropdownView] = useState<T>(null!)

  const dropdownClasses = classNames('dropdown', 'flex', {
    open: dropdownView,
  })

  return (
    <div className={dropdownClasses}>
      {render({
        dropdownView,
        isOpen: !!dropdownView,
        onDropdown: setDropdownView,
      })}
      <DropdownMenu<T>
        options={setOptions(dropdownView)}
        onSelect={onSelect(dropdownView, setDropdownView)}
        onDropdown={setDropdownView}
        isActive={isActive(dropdownView)}
        isDefault={isDefault(dropdownView)}
      />
    </div>
  )
}

export default Dropdown
