import { useState } from 'react'
import DropdownMenu from './DropdownMenu'

/**
 * Provides for renderProp:
 * ------
 * isOpen: !!dropdownView
 * dropdownView: dropdownView
 * disabled: setDisabled(dropdownView)
 * onDropdown: setDropdownView
 *
 * Consumer provides:
 * ------
 * isActive: (dropdownView) => boolean
 * setOptions: (dropdownView) => object
 * setDisabled: (dropdownView) => boolean
 * onSelect: (optionIndex, dropdownView, setDropdownView) => void
 */
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

export default Dropdown
