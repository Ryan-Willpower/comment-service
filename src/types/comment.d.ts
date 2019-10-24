import { UserContext } from 'context'
import { Pool } from 'pg'

export interface ConstructorWithoutUserData {
  postid: number
  pool: Pool
}

export interface ConstructorWithUserData {
  postid: number
  context: UserContext
}

export interface Comment {
  username: string
  message: string
  date: string
}

export interface CommentArgs {
  postid: number
}

export interface AddArgs extends CommentArgs {
  message: string
}

export interface Result {
  isSuccess: Boolean
}
