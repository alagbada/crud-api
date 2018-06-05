// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    //connection: 'postgres://localhost/webstore'
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'fathers26',
      database : 'webstore'
    }
  },

  test: {
    client: 'pg',
    //connection: 'postgres://localhost/webstore'
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'fathers26',
      database : 'test-webstore'
    }
  },

};
