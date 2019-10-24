import { CommentArgs } from 'comment'
import { UserContext } from 'context'
import { CommentService } from '../../services/comment'
import { ApolloError } from 'apollo-server'

export default {
  Query: {
    allComment: async (
      _parents: any,
      args: CommentArgs,
      context: UserContext
    ) => {
      try {
        const comment = new CommentService({
          postid: args.postid,
          pool: context.pool,
        })

        const result = await comment.getAll()

        return result.rows
      } catch (error) {
        throw new ApolloError(error)
      }
    },
  },
}
