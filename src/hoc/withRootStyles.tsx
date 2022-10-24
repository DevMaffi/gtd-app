import 'styles/index.sass'

function withRootStyles<T>(Component: React.FC<any>): React.FC<T> {
  const WithRootStyles: React.FC<T> = props => {
    return <Component {...props} />
  }

  return WithRootStyles
}

export default withRootStyles
