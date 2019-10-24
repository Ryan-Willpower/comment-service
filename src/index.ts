import { start } from './app'
import { Logger } from './loaders/logger'

const server = start()

server.listen({ port: 4003, host: '0.0.0.0' }).then(({ url }) => {
  const logger = new Logger(`server start at ${url}`)
  logger.info()
})
