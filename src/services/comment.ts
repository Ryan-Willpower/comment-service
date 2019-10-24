import {
  ConstructorWithUserData,
  ConstructorWithoutUserData,
  Comment,
  Result,
} from 'comment'
import { QueryConfig, QueryResult } from 'pg'
import { ApolloError } from 'apollo-server'

export class CommentService {
  opt: ConstructorWithUserData & ConstructorWithoutUserData

  constructor(opt: ConstructorWithUserData)
  constructor(opt: ConstructorWithoutUserData)
  constructor(opt: any) {
    this.opt = opt
  }

  async getAll(): Promise<QueryResult<Comment>> {
    const query: QueryConfig = {
      text: `SELECT users.username, "comments".message, "comments"."date" FROM "comments"
      LEFT JOIN users
      ON "comments".userid = users.userid
      LEFT JOIN posts
      ON "comments".postid = posts.postid
      WHERE "comments".postid = $1`,
      values: [this.opt.postid],
    }

    const result: QueryResult<Comment> = await this.opt.pool.query(query)

    return result
  }

  async add(message: string) {
    try {
      const query: QueryConfig = {
        text: `INSERT INTO "comments"(postid, userid, message) VALUES ($1, $2, $3)`,
        values: [this.opt.postid, this.opt.context.userid, message],
      }

      await this.opt.context.pool.query(query)

      return {
        isSuccess: true,
      } as Result
    } catch (error) {
      throw new ApolloError(error)
    }
  }
}
