import 'styles/index.sass'

function withRootStyles<T>(Component: any) {
  return function (props: T) {
    return <Component {...props} />
  }
}

export default withRootStyles
