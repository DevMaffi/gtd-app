import { useState } from 'react'
import classNames from 'classnames'
import { DropdownMenu } from 'components/dropdown'
import { DropdownOption } from 'components/dropdown/DropdownMenuItem'
import { ArrowFn } from 'types/common'
import './dropdown.sass'

export interface DropdownRenderPropArgs<T> {
  isOpen: boolean
  dropdownView: T
  onDropdown: (dropdownView: T) => void
}

export type DropdownRenderProp<T> = ({
  isOpen,
  dropdownView,
  onDropdown,
}: DropdownRenderPropArgs<T>) => React.ReactNode

export interface DropdownProps<T> {
  on: DropdownRenderProp<T>
  setOptions: (dropdownView: T) => DropdownOption[]
  isActive: (dropdownView: T) => ArrowFn<boolean>
  isDefault: (dropdownView: T) => ArrowFn<boolean>
  onSelect: (
    dropdownView: T,
    onDropdown: (setDropdownView: T) => void
  ) => ArrowFn<(optionIndex: number) => any>
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
