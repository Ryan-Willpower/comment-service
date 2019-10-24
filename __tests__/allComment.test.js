const pg = require('pg')
const allComment = require('../src/graphql/resolvers/allComment')

const { allComment: mockAllComment } = allComment.default.Query

jest.mock('pg')

const pool = new pg.Pool()

describe('Comment service', () => {
  it('should get all comment', async () => {
    const postid = 1
    const mockContext = {
      pool,
    }
    const result = await mockAllComment(null, postid, mockContext)

    expect(result).toStrictEqual([
      {
        username: 'ryan',
        message: 'test from mock',
        date: 'today',
      },
    ])
  })
})
