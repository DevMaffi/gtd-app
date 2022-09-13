import PropTypes from 'prop-types'

function DropdownItem({ data, active, ...props }) {
  const rootClasses = ['dropdown__menu-item', 'fs-300', 'text-light']

  if (active) rootClasses.push('bg-grade')

  return (
    <span className={rootClasses.join(' ')} {...props}>
      {data}
    </span>
  )
}

DropdownItem.propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  active: PropTypes.bool,
}

export default DropdownItem
