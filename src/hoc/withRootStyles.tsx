import 'styles/index.sass'

const withRootStyles =
  <T,>(Component: React.FC<any>): React.FC<T> =>
  props => {
    return <Component {...props} />
  }

export default withRootStyles
