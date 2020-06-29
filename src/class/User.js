const { instance, token } = require('../client');
module.exports = class User {
  constructor (userid) {
    this.userid = userid;
    this.toReturn = { params: {}, headers: {} };
    (async () => {
      const bruh = await instance.get('/guilds/' + guildid + '/users/' + userid);
      this.data = bruh.data;
    })();
  }
}