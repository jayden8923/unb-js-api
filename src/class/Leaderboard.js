const { instance, token } = require('../client');
module.exports = class Leaderboard {
  constructor (guildid) {
    this.guildid = guildid;
    this.toReturn = { params: {}, headers: {} };
  }
  page(number) {
    if (!number) number = 1;
    if (typeof number !== 'number') throw new TypeError('Page number must be a number');
    
  }
}