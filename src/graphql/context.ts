import jwt from 'jsonwebtoken'
import { Request } from 'express'
import { UserContext } from 'context'

import { pool } from '../loaders/pg'
import config from '../config'

export const context = ({ req }: { req: Request }) => {
  try {
    const token = req.headers.authorization || ''
    const payload = jwt.verify(token, config.secret) as UserContext

    return {
      userid: payload.userid,
      pool,
    }
  } catch (error) {
    return { pool }
  }
}
