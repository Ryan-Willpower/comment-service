import { start } from './app'
import { Logger } from './loaders/logger'

const server = start()

server.listen().then(({ url }) => {
  const logger = new Logger(`server start at ${url}`)
  logger.info()
})
