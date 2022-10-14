import PropTypes from 'prop-types'
import RootClasses from 'utils/rootClasses'
import './dropdownMenuItem.sass'

function DropdownMenuItem({ data, defaultOption, active, ...props }) {
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

  return (
    <span className={rootClasses.toClassNameString()} {...props}>
      {data}
    </span>
  )
}

DropdownMenuItem.propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultOption: PropTypes.bool,
  active: PropTypes.bool,
}

export default DropdownMenuItem
