import { DropdownMenuItem } from 'components/dropdown'
import { ArrowFn, DropdownOption, SetDropdownFn } from 'types'
import './dropdownMenu.sass'

export interface DropdownMenuProps<T> {
  options: DropdownOption[]
  isActive: (optionIndex: number) => boolean
  isDefault: (optionIndex: number) => boolean
  onSelect: (optionIndex: number) => ArrowFn<void>
  onDropdown: SetDropdownFn<T>
}

const DropdownMenu = <T,>({
  options,
  isActive,
  isDefault,
  onSelect,
  onDropdown,
}: DropdownMenuProps<T>) => {
  return (
    <>
      <div className="dropdown__menu-inner bg-container">
        {options.map((o, i) => {
          return (
            <DropdownMenuItem
              key={o._id}
              data={o.value}
              onClick={onSelect(i)}
              defaultOption={isDefault(i)}
              active={isActive(i)}
            />
          )
        })}
      </div>
      <div
        onClick={() => onDropdown(null!)}
        className="dropdown__menu-cover"
      ></div>
    </>
  )
}

export default DropdownMenu
