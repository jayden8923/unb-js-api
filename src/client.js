const axios = require('axios');
module.exports = class {
  constructor(apitoken, version) {
    if (!apitoken) throw new Error('No API token provided');
    if (typeof apitoken !== 'string') throw new TypeError('API token must be a string');
   this.token = apitoken;
  if (!version || typeof version !== 'number') this.version = "v1";
  else this.version = 'v' + version;
  };

   const instance = axios.create({
    baseURL: 'https://unbelievaboat.com/api/' + this.version,
    timeout: 1000,
    headers: {'Authorization': this.token}
});

/**
 * Get a user's balance.
 * @param {string} guildid
 * @param {string} userid
 */
this.getUserBalance = function(guildid, userid) {
  if (!guildid) throw new Error('No guild ID provided');
  else if (!userid) throw new Error('No user ID provided');
  else if (typeof guildid !== 'string') throw new TypeError('Guild ID must be a string');
  else if (typeof userid !== 'string') throw new TypeError('User ID must be a string');
return instance.get(`/guilds/{guild.id}/users/{user.id}`);
}
};