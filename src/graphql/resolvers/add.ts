import { AddArgs } from 'comment'
import { UserContext } from 'context'
import { ApolloError, AuthenticationError, UserInputError } from 'apollo-server'

import { CommentService } from '../../services/comment'

export default {
  Mutation: {
    add: async (_parent: any, args: AddArgs, context: UserContext) => {
      try {
        const comment = new CommentService({ postid: args.postid, context })

        const result = await comment.add(args.message)

        return result
      } catch (error) {
        if (!context.userid) {
          throw new AuthenticationError('not login')
        }

        throw new ApolloError(error)
      }
    },
  },
}
