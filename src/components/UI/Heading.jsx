function Heading({ children, className }) {
  const rootClasses = ['heading', 'fs-900', 'text-light']

  if (className) rootClasses.push(className)

  return <h1 className={rootClasses.join(' ')}>{children}</h1>
}

export default Heading
