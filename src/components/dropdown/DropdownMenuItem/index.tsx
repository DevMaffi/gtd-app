import RootClasses from 'utils/rootClasses'
import './dropdownMenuItem.sass'

export interface BaseDropdownMenuItemProps {
  data: any
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
  ...props
}) => {
  const rootClasses = new RootClasses(
    'dropdown__menu-item flex fs-300 text-light'
  )
    .add({
      condition: active,
      type: 'active',
      className: 'active bg-first',
    })
    .add({
      condition: defaultOption,
      type: 'default',
      className: 'default',
    })
    .add({
      condition: !!className,
      type: 'extra',
      className: className ?? '',
    })

  return (
    <span className={rootClasses.toClassNameString()} {...props}>
      {data}
    </span>
  )
}

export default DropdownMenuItem
