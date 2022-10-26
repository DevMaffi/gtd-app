import { useState } from 'react'
import { DropdownMenu } from 'components/dropdown'
import RootClasses from 'utils/rootClasses'
import {
  ArrowFn,
  DropdownOption,
  SetDropdownFn,
  DropdownRenderPropArgs,
} from 'types'
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

  const rootClasses = new RootClasses('dropdown flex').add({
    condition: !!dropdownView,
    type: 'dropdownView',
    className: 'open',
  })

  return (
    <div className={rootClasses.toClassNameString()}>
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
