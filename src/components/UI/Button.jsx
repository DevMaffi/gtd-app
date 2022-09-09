function Button({ children, arrow, className, ...props }) {
  const rootClasses = ['button', 'text-light']

  if (arrow) rootClasses.push('button--arrow bg-container-light')
  else rootClasses.push('bg-grade')

  if (className) rootClasses.push(className)

  return (
    <button {...props} className={rootClasses.join(' ')}>
      {children}
    </button>
  )
}

export default Button
