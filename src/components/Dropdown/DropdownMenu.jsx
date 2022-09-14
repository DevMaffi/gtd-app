import PropTypes from 'prop-types'
import DropdownItem from './DropdownItem'

function DropdownMenu({ options, isActive, isDefault, onSelect, onDropdown }) {
  return (
    <div className="dropdown__menu">
      <div className="dropdown__menu-inner bg-container">
        {options.map((o, i) => {
          return (
            <DropdownItem
              key={o}
              data={o}
              onClick={() => onSelect(i)}
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

DropdownMenu.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  isActive: PropTypes.func.isRequired,
  isDefault: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onDropdown: PropTypes.func.isRequired,
}

export default DropdownMenu
