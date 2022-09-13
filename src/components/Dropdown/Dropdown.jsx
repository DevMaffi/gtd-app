import { useState } from 'react'
import PropTypes from 'prop-types'
import DropdownMenu from './DropdownMenu'

function Dropdown({ setOptions, isActive, onSelect, on: render, setDisabled }) {
  const [dropdownView, setDropdownView] = useState(null)

  const rootClasses = ['dropdown', 'flex']

  if (dropdownView) rootClasses.push('open')

  return (
    <div className={rootClasses.join(' ')}>
      {render({
        dropdownView,
        isOpen: !!dropdownView,
        disabled: setDisabled(dropdownView),
        onDropdown: setDropdownView,
      })}
      <DropdownMenu
        options={setOptions(dropdownView)}
        onSelect={optionIndex =>
          onSelect(optionIndex, dropdownView, setDropdownView)
        }
        isActive={isActive(dropdownView)}
      />
    </div>
  )
}

Dropdown.propTypes = {
  setOptions: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  isActive: PropTypes.func.isRequired,
  setDisabled: PropTypes.func.isRequired,
  on: PropTypes.func.isRequired,
}

export default Dropdown
