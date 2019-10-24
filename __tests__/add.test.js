const pg = require('pg')
const add = require('../src/graphql/resolvers/add')
const apollo = require('apollo-server')

const { add: mockAdd } = add.default.Mutation

jest.mock('pg')

const pool = new pg.Pool()
const args = {
  postid: 2,
  message: 'test from jest',
}

describe('Add comment service', () => {
  it('should add comment to db', async () => {
    const mockContext = {
      userid: 'ryan',
      pool,
    }

    const result = await mockAdd(null, args, mockContext)

    expect(result).toStrictEqual({
      isSuccess: true,
    })
  })
})
