import PropTypes from 'prop-types'
import RootClasses from 'utils/rootClasses'
import './heading.sass'

function Heading({ children, className }) {
  const rootClasses = new RootClasses('heading fs-900 text-light').add({
    condition: className,
    type: 'extra',
    className,
  })

  return <h1 className={rootClasses.toClassNameString()}>{children}</h1>
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Heading
