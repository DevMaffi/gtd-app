import classNames from 'classnames'
import './dropdownMenuItem.sass'

export type DropdownOptionValue = string | number

export type DropdownOption = {
  readonly _id: string | number
  value: DropdownOptionValue
}

export interface BaseDropdownMenuItemProps {
  data: DropdownOptionValue
  defaultOption: boolean
  active: boolean
  className?: string
}

export type DropdownMenuItemProps = BaseDropdownMenuItemProps &
  Omit<
    React.AllHTMLAttributes<HTMLSpanElement>,
    keyof BaseDropdownMenuItemProps
  >

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
  data,
  defaultOption,
  active,
  className,
  ...restProps
}) => {
  const dropdownMenuItemClasses = classNames(
    'dropdown__menu-item',
    'flex',
    'fs-300',
    'text-light',
    {
      active,
      'bg-first': active,
      default: defaultOption,
    },
    className
  )

  return (
    <span className={dropdownMenuItemClasses} {...restProps}>
      {data}
    </span>
  )
}

export default DropdownMenuItem
