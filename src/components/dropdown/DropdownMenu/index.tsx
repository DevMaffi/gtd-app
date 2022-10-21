import { DropdownMenuItem } from 'components/dropdown'
import { ArrowFn, SetDropdownFn } from 'types'
import './dropdownMenu.sass'

export interface DropdownMenuProps {
  options: any[]
  isActive: (optionIndex: number) => boolean
  isDefault: (optionIndex: number) => boolean
  onSelect: (optionIndex: number) => ArrowFn<void>
  onDropdown: SetDropdownFn
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  options,
  isActive,
  isDefault,
  onSelect,
  onDropdown,
}) => {
  return (
    <div className="dropdown__menu">
      <div className="dropdown__menu-inner bg-container">
        {options.map((o, i) => {
          return (
            <DropdownMenuItem
              key={o}
              data={o}
              onClick={onSelect(i)}
              defaultOption={isDefault(i)}
              active={isActive(i)}
            />
          )
        })}
      </div>
      <div
        onClick={() => onDropdown(null)}
        className="dropdown__menu-cover"
      ></div>
    </div>
  )
}

export default DropdownMenu
