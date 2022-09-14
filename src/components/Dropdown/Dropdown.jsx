import { useState } from 'react'
import PropTypes from 'prop-types'
import DropdownMenu from './DropdownMenu'

function Dropdown({ setOptions, isActive, isDefault, onSelect, on: render }) {
  const [dropdownView, setDropdownView] = useState(null)

  const rootClasses = ['dropdown', 'flex']

  if (dropdownView) rootClasses.push('open')

  return (
    <div className={rootClasses.join(' ')}>
      {render({
        dropdownView,
        isOpen: !!dropdownView,
        onDropdown: setDropdownView,
      })}
      <DropdownMenu
        options={setOptions(dropdownView)}
        onSelect={optionIndex =>
          onSelect(optionIndex, dropdownView, setDropdownView)
        }
        onDropdown={setDropdownView}
        isActive={isActive(dropdownView)}
        isDefault={isDefault(dropdownView)}
      />
    </div>
  )
}

Dropdown.propTypes = {
  setOptions: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  isActive: PropTypes.func.isRequired,
  isDefault: PropTypes.func.isRequired,
  on: PropTypes.func.isRequired,
}

export default Dropdown
