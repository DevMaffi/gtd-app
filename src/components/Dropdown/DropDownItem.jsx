function DropDownItem({ data, active, ...props }) {
  const rootClasses = ['dropdown__menu-item', 'fs-300', 'text-light']

  if (active) rootClasses.push('bg-grade')

  return (
    <span className={rootClasses.join(' ')} {...props}>
      {data}
    </span>
  )
}

export default DropDownItem
