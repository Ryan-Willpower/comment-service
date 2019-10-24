// entry of all resolver here
import _ from 'lodash'
import allComment from './allComment'
import add from './add'

export const resolvers = _.merge({}, allComment, add)
