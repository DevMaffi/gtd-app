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

export interface DropdownProps {
  setOptions: (dropdownView: any) => any[]
  isActive: (dropdownView: any) => ArrowFn<boolean>
  isDefault: (dropdownView: any) => ArrowFn<boolean>
  onSelect: (
    dropdownView: any,
    onDropdown: SetDropdownFn
  ) => ArrowFn<(optionIndex: number) => any>
  on: DropdownRenderProp
}

const Dropdown: React.FC<DropdownProps> = ({
  setOptions,
  isActive,
  isDefault,
  onSelect,
  on: render,
}) => {
  const [dropdownView, setDropdownView] = useState<any>(null)

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
