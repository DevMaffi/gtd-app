import { useState } from 'react'
import { DropdownMenu } from 'components/dropdown'
import RootClasses from 'utils/rootClasses'
import { ArrowFn, SetDropdownFn, DropdownRenderPropArgs } from 'types'
import './dropdown.sass'

export type DropdownRenderProp = ({
  isOpen,
  dropdownView,
  onDropdown,
}: DropdownRenderPropArgs) => React.ReactNode

export interface DropdownProps<V, O> {
  setOptions: (dropdownView: V) => O[]
  isActive: (dropdownView: V) => ArrowFn<boolean>
  isDefault: (dropdownView: V) => ArrowFn<boolean>
  onSelect: (
    dropdownView: V,
    onDropdown: SetDropdownFn
  ) => ArrowFn<(optionIndex: number) => any>
  on: DropdownRenderProp
}

const Dropdown = <V, O>({
  setOptions,
  isActive,
  isDefault,
  onSelect,
  on: render,
}: DropdownProps<V, O>) => {
  const [dropdownView, setDropdownView] = useState<V>(null!)

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
      <DropdownMenu
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
