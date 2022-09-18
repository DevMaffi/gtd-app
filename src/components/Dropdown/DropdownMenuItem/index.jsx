import PropTypes from 'prop-types'

function DropdownMenuItem({ data, defaultOption, active, ...props }) {
  const rootClasses = ['dropdown__menu-item', 'fs-300', 'text-light']

  if (active) rootClasses.push('bg-grade')

  if (defaultOption) rootClasses.push('default')

  return (
    <span className={rootClasses.join(' ')} {...props}>
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
