import DropdownItem from './DropdownItem'

function DropdownMenu({ options, isActive, onSelect }) {
  return (
    <div className="dropdown__menu">
      <div className="dropdown__menu-inner bg-container">
        {options.map((o, i) => {
          const active = isActive(i)

          return (
            <DropdownItem
              key={o}
              data={o}
              onClick={() => onSelect(i)}
              active={active}
            />
          )
        })}
      </div>
    </div>
  )
}

export default DropdownMenu
