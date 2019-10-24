// load env here
import dotenv from 'dotenv'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const envFound = dotenv.config()

if (!envFound) {
  throw new Error('.env not found!')
}

export default {
  hello: 'this is your map object of .env',
}
