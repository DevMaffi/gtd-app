import PropTypes from 'prop-types'

function Heading({ children, className }) {
  const rootClasses = ['heading', 'fs-900', 'text-light']

  if (className) rootClasses.push(className)

  return <h1 className={rootClasses.join(' ')}>{children}</h1>
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Heading
