const pg = jest.genMockFromModule('pg')

class Pool {
  async query(objQuery) {
    return {
      rowCount: 1,
      rows: [
        {
          username: 'ryan',
          message: 'test from mock',
          date: 'today',
        },
      ],
    }
  }
}

pg.Pool = Pool

module.exports = pg
