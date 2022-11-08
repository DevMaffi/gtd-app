import * as dateActionCreators from './date'
import * as taskActionCreators from './task'
import * as counterActionCreators from './counter'

export default {
  ...dateActionCreators,
  ...taskActionCreators,
  ...counterActionCreators,
}
