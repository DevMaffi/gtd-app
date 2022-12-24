import useTypedSelector from './useTypedSelector'

const useStateDate = (): Date => {
  const { timestamp } = useTypedSelector(state => state.date)
  return new Date(timestamp)
}

export default useStateDate
