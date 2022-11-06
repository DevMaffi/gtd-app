import { bindActionCreators } from '@reduxjs/toolkit'
import useAppDispatch from './useAppDispatch'
import actionCreators from 'app/actions'

const useActions = (): typeof actionCreators => {
  const dispatch = useAppDispatch()
  return bindActionCreators(actionCreators, dispatch)
}

export default useActions
