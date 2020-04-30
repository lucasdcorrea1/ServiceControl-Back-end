'use strict'
const database = require('../../../../database/index');

module.exports = {
  async getUserByEmail(email) {
   const users = await database('Users')
      .where('email', '=', email)
      .select('*')
      .first();

    return users;
  },

  async put({id, data}) {
    const users = await database('Users')
      .where('id', '=', id)
      .update(data)
      .clearCounters();
    
    return users;
  },
};