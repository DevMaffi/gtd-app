import 'styles/index.sass'

function withRootStyles<T>(Component: any) {
  const WithRootStyles: React.FC<T> = props => {
    return <Component {...props} />
  }

  return WithRootStyles
}

export default withRootStyles
