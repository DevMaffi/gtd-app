import { Provider } from 'react-redux'
import { store } from 'app/store'
import 'styles/index.sass'

const withRootContext =
  <T extends {} = {}>(Component: React.FC<any>): React.FC<T> =>
  props => {
    return (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    )
  }

export default withRootContext
