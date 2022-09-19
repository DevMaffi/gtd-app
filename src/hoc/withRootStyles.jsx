import 'styles/index.sass'

function withRootStyles(Component) {
  return function (props) {
    return <Component {...props} />
  }
}

export default withRootStyles
